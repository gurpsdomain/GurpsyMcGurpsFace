import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../back-end/storage/storage.service';
import 'rxjs/add/operator/toPromise';
import {Template} from '../../../models/sheet/template/template.model';
import {JsonConvert} from 'json2typescript';
import {Sheet} from '../../../models/sheet/model/sheet.model';

@Injectable()
export class ModelService {
  private template: Template;
  private model: Sheet;

  private _editMode = false;
  private editModeChangeSource = new Subject<boolean>();
  private modelChangeSource = new Subject<Sheet>();

  /**
   * Register to this observable to be notified when the template has changed.
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

  constructor(private storageService: StorageService) {
    this.initSheet();
  }

  /**
   * Set a new Template.
   *
   * @param {Template} The new Template to set
   */
  public setNewTemplate(template: Template): void {
    this.loadTemplate(template, true);

  }

  /**
   * Update the current Template.
   *
   * @param {Template} template
   */
  updateCurrentModel(template: Template): void {
    this.loadTemplate(template, true);
  }

  /**
   * Load a template from file.
   *
   * @param file
   */
  public loadSheetFromFile(file: File): Promise<Template> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            const template: Template = JsonConvert.deserializeString(fileReader.result, Template);
            resolve(template);
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
   *
   * @param {Template} template
   * @param {Boolean} true if this is a new template, false if it comes from local storage
   */
  public loadTemplate(template: Template, isNew: boolean): void {

    this.changeUpdateModel(template);

    this.changeModel(this.transform(template))

    if (isNew) {
      this.storageService.storeTemplate(template);
    }
  }

  /**
   * Return the current template.
   *
   * @returns {Promise<Template>}
   */
  public getTemplate(): Promise<Template> {
    return Promise.resolve(this.template);
  }

  /**
   * Return the current Model.
   *
   * @returns {Promise<Sheet>}
   */
  public getModel(): Promise<Sheet> {
    return Promise.resolve(this.model);
  }

  /**
   * If the template is currently in edit mode. If so, it is possible
   * to edit the Template. Concequently, this will lead to a new
   * Sheet.
   *
   * @param {boolean}
   */
  public setEditMode(value: boolean) {
    this._editMode = value;
    this.editModeChangeSource.next(value);
  }

  /**
   * If the template is currently in edit mode. If so, it is possible
   * to edit the Template. Consequently, this will lead to a new
   * template.
   *
   * @return {Promise<boolean>} A Promise that resolves to a boolean. True
   *          if this service is currently in edit mode, false otherwise.
   */
  public getEditMode(): Promise<boolean> {
    return Promise.resolve(this._editMode);
  }

  private loadStoredSheet(template: Template): void {
    this.loadTemplate(template, false);
  }

  private initSheet(): void {
    this.loadSheetFromStorage();

    this.storageService.getSheetObserver().subscribe(sheets => this.loadSheetFromStorage());
  }

  private loadSheetFromStorage(): void {
    this.storageService.getCurrentSheet()
      .then(sheet => this.loadStoredSheet(sheet))
      .catch(any => this.clearModel());
  }

  private clearModel(): void {
    this.changeModel(undefined);
  }

  private changeUpdateModel(template: Template): void {
    this.template = template;
  }

  private changeModel(sheet: Sheet): void {
    this.model = sheet;
    this.notifyListeners();
  }

  private notifyListeners(): void {
    this.modelChangeSource.next(this.model);
  }

  private transform(template: Template): Sheet {
    const sheet: Sheet = new Sheet(template);
    return sheet;
  }
}
