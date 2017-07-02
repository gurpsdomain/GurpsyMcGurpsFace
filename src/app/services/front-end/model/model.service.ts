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

  private inputModel: UpdateSheet;
  private outputModel: ReadSheet = new ReadSheet();

  private _editMode = false;

  private editModeChangeSource = new Subject<boolean>();
  private outputModelChangeSource = new Subject<ReadSheet>();
  private inputModelChangeSource = new Subject<UpdateSheet>();

  public editModeChange$ = this.editModeChangeSource.asObservable();
  public outputModelChange$ = this.outputModelChangeSource.asObservable();
  public inputModelChange$ = this.inputModelChangeSource.asObservable();

  constructor(private loggingService: LoggingService,
              private modelTransformerService: ModelTransformerService,
              private storageService: StorageService,
              private http: Http) {

    this.initSheet();
  }

  /**
   * Load a readSheet from file. A json file is expected and it should abide to the interface
   * as defined in ../../model/readSheet/input.
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

    this.changeInputModel(sheet);

    this.modelTransformerService.transform(sheet)
      .then(outputSheet => this.changeOutputModel(outputSheet)).catch(any => this.setFallbackOutputModel())

    if (isNew) {
      this.storageService.storeSheet(sheet);
    }
  }

  /**
   * Return the current outputSheet.
   *
   * @returns {ReadSheet}
   */
  public getOutputModel(): ReadSheet {
    return this.outputModel;
  }

  /**
   * If the model is currently in edit mode. If so, it is possible
   * to edit the UpdateSheet. Concequently, this will lead to a new
   * ReadSheet.
   *
   * @param {boolean}
   */
  public set editMode(value: boolean) {
    this._editMode = value;
    this.editModeChangeSource.next(value);
  }

  /**
   * If the model is currently in edit mode. If so, it is possible
   * to edit the UpdateSheet. Concequently, this will lead to a new
   * ReadSheet.
   *
   * @return {boolean}
   */
  public get editMode(): boolean {
    return this._editMode;
  }

  private handleStoredSheet(sheet: UpdateSheet): void {
    this.loadSheet(sheet, false);
  }

  private initSheet(): void {
    this.storageService.getCurrentSheet().then(sheet => this.handleStoredSheet(sheet)).catch(any => this.initEmptyOutputSheet());
  }

  private initEmptyOutputSheet(): void {
    const emptySheet: ReadSheet = new ReadSheet();
    this.changeOutputModel(emptySheet);
  }

  private changeInputModel(inputSheet: UpdateSheet): void {
    this.inputModel = inputSheet;
    this.inputModelChangeSource.next(inputSheet);
  }

  private changeOutputModel(outputSheet: ReadSheet): void {
    this.outputModel = outputSheet;
    this.outputModelChangeSource.next(outputSheet);
  }

  private setFallbackOutputModel(): void {
    this.http.get(ModelService.FALLBACK_MODEL).toPromise()
      .then(response => this.changeOutputModel(response.json()))
      .catch(error => this.loggingService.error('Unable to fetch fallback readSheet. ' + error))
  }


}
