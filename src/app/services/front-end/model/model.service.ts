import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../back-end/storage/storage.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ModelTransformerService} from '../../back-end/model-transformer/model-transformer.service';
import {LoggingService} from '../../back-end/logging/logging.service';
import {UpdateSheet} from '../../../models/sheet/update/update-sheet.model';
import {JsonConvert} from 'json2typescript';
import {ReadSheet} from '../../../models/sheet/read/read-sheet.model';

@Injectable()
export class ModelService {

  private static FALLBACK_MODEL = './assets/sheets/dai-blackthorn-output.json';

  private updateModel: UpdateSheet;
  private readModel: ReadSheet;

  private _editMode = false;
  private editModeChangeSource = new Subject<boolean>();
  private modelChangeSource = new Subject<ReadSheet>();

  /**
   * Register to this observable to be notified when the model has changed.
   *
   * @type Observable
   */
  public modelChange$ = this.modelChangeSource.asObservable();

  /**
   * Register to this observable to be notified when the edit mode has changed.
   *
   * @type Observable
   */
  public editModeChange$ = this.editModeChangeSource.asObservable();

  constructor(private loggingService: LoggingService,
              private modelTransformerService: ModelTransformerService,
              private storageService: StorageService,
              private http: Http) {

    this.initSheet();
  }

  /**
   * Set a new UpdateModel.
   *
   * @param {UpdateSheet} The new UpdateSheet to set
   */
  public setNewModel(updateModel: UpdateSheet): void {
    this.loadSheet(updateModel, true);

  }

  /**
   * Update the current UpdateModel.
   *
   * @param {UpdateSheet} updateModel
   */
  updateCurrentModel(updateModel: UpdateSheet): void {
    this.loadSheet(updateModel, true);
  }

  /**
   * Load a readSheet from file.
   *
   * @param file
   */
  public loadSheetFromFile(file: File): Promise<UpdateSheet> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            const sheet: UpdateSheet = JsonConvert.deserializeString(fileReader.result, UpdateSheet);
            resolve(sheet);
          } else {
            reject('Could not read file');
          }
        };

        if (file != null) {
          fileReader.readAsText(file);
        }
      }
    );
  }

  /**
   * Load a readSheet. This method should be used to load a new readSheet into
   * this application. It will both load the new readSheet and persist
   * in local storage.
   *
   * @param {UpdateSheet} sheet
   * @param {Boolean} true if this is a new readSheet, false if it comes from local storage
   */
  public loadSheet(sheet: UpdateSheet, isNew: boolean): void {

    this.changeUpdateModel(sheet);

    this.modelTransformerService.transform(sheet)
      .then(outputSheet => this.changeReadModel(outputSheet));

    if (isNew) {
      this.storageService.storeSheet(sheet);
    }
  }

  /**
   * Return the current UpdateModel.
   *
   * @returns {Promise<UpdateSheet>}
   */
  public getUpdateModel(): Promise<UpdateSheet> {
    return Promise.resolve(this.updateModel);
  }

  /**
   * Return the current ReadModel.
   *
   * @returns {Promise<ReadSheet>}
   */
  public getReadModel(): Promise<ReadSheet> {
    return Promise.resolve(this.readModel);
  }

  /**
   * If the model is currently in edit mode. If so, it is possible
   * to edit the UpdateSheet. Concequently, this will lead to a new
   * ReadSheet.
   *
   * @param {boolean}
   */
  public setEditMode(value: boolean) {
    this._editMode = value;
    this.editModeChangeSource.next(value);
  }

  /**
   * If the model is currently in edit mode. If so, it is possible
   * to edit the UpdateSheet. Concequently, this will lead to a new
   * ReadSheet.
   *
   * @return {Promise<boolean>} A Promise that resolves to boolean. True
   *          if this service is currently in edit mode, f¬alse otherwise.
   */
  public getEditMode(): Promise<boolean> {
    return Promise.resolve(this._editMode);
  }

  private loadStoredSheet(sheet: UpdateSheet): void {
    this.loadSheet(sheet, false);
  }

  private initSheet(): void {
    this.loadSheetFromStorage();

    this.storageService.getSheetObserver().subscribe(sheets => this.loadSheetFromStorage());
  }

  private loadSheetFromStorage(): void {
    this.storageService.getCurrentSheet()
      .then(sheet => this.loadStoredSheet(sheet))
      .catch(any => this.clearReadModel());
  }

  private clearReadModel(): void {
    this.changeReadModel(undefined);
  }

  private changeUpdateModel(updateSheet: UpdateSheet): void {
    this.updateModel = updateSheet;
  }

  private changeReadModel(readSheet: ReadSheet): void {
    this.readModel = readSheet;
    this.notifyListeners();
  }

  private notifyListeners(): void {
    this.modelChangeSource.next(this.readModel);
  }
}
