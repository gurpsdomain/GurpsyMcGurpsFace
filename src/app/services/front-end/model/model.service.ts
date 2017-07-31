import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../back-end/storage/storage.service';
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
  private newModelLoadedChangeSource = new Subject<Sheet>();

  /**
   * Register to this observable to be notified when the sheet has changed. This is most
   * likely due to a change of the template, and consequently update of the sheet.
   *
   * @type Observable
   */
  public modelChange$ = this.modelChangeSource.asObservable();

  /**
   * Register to this observable to be notified when a new sheet has been loaded.
   *
   * @type Observable
   */
  public newModelLoadedChange$ = this.newModelLoadedChangeSource.asObservable();

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
   * Create a template from file.
   *
   * @param {File} A json representative of a template
   */
  public createTemplateFromFile(file: File): Promise<Template> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            const jsonConvert = new JsonConvert();
            const template: Template = jsonConvert.deserialize(JSON.parse(fileReader.result), Template);
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
   * @param {Boolean} true if this is a new template, false if it comes from local storage or is
   * reload of the current template/sheet.
   */
  public loadTemplate(template: Template, store?: boolean, isFromStorage?: boolean): void {

    this.setTemplate(template);
    const model = this.createModel(template);
    this.setModel(model)

    if (store || isFromStorage) {
      this.newModelLoadedChangeSource.next(this.model);
      if (store) {
        this.storageService.storeTemplate(template);
      }
    }
  }

  /**
   * Update the current Model.
   *
   * @param {Template} The current template.
   */
  public updateCurrentTemplate(template: Template): void {
    this.loadTemplate(template, true);
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
    this.loadTemplate(template, false, true);
  }

  private initSheet(): void {
    this.loadSheetFromStorage();

    this.storageService.getSheetObserver()
      .subscribe(sheets => this.loadSheetFromStorage());
  }

  private loadSheetFromStorage(): void {
    this.storageService.getCurrentSheet()
      .then(sheet => this.loadStoredSheet(sheet))
      .catch(any => this.setModel(undefined));
  }

  private setTemplate(template: Template): void {
    this.template = template;
  }

  private setModel(model: Sheet): void {
    this.model = model;
    this.modelChangeSource.next(this.model);
  }

  private createModel(template: Template): Sheet {
    return new Sheet(template);
  }
}
