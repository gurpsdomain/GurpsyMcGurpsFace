import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../back-end/storage/storage.service';
import {Template} from '../../../models/sheet/template/template.model';
import {JsonConvert} from 'json2typescript';
import {Sheet} from '../../../models/sheet/model/sheet.model';

@Injectable()
export class SheetService {
  private template: Template;
  private sheet: Sheet;

  private _editMode = false;
  private editModeChangeSource = new Subject<boolean>();
  private sheetUpdatedSource = new Subject<Sheet>();
  private newSheetLoadedSource = new Subject<Sheet>();

  /**
   * Register to this observable to be notified when the sheet has been updated. This is most
   * likely due to a change of the template, and consequently update of the sheet.
   *
   * @type Observable
   */
  public sheetUpdated$ = this.sheetUpdatedSource.asObservable();

  /**
   * Register to this observable to be notified when a new sheet has been loaded.
   *
   * @type Observable
   */
  public newSheetLoaded$ = this.newSheetLoadedSource.asObservable();

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
   * Load a new template.
   *
   * @param {Template} The updated template.
   */
  public loadNewTemplate(template: Template): void {
    this.loadTemplate(template, true);
  }


  /**
   * Update the template.
   *
   * @param {Template} The updated template.
   */
  public updateTemplate(template: Template): void {
    template.lastModified = new Date();
    this.loadTemplate(template, true);
  }

  /**
   * Return the template.
   *
   * @returns {Promise<Template>}
   */
  public getTemplate(): Promise<Template> {
    return Promise.resolve(this.template);
  }

  /**
   * Return the Sheet.
   *
   * @returns {Promise<Sheet>}
   */
  public getSheet(): Promise<Sheet> {
    return Promise.resolve(this.sheet);
  }

  /**
   * If the application is currently in edit mode. If so, it is possible
   * to edit the Template. Consequently, this will lead to a new
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

  private loadTemplate(template: Template, store?: boolean, isFromStorage?: boolean): void {

    this.setTemplate(template);
    const sheet = this.createSheet(template);
    this.setSheet(sheet)

    if (store || isFromStorage) {
      this.newSheetLoadedSource.next(this.sheet);
      if (store) {
        this.storageService.storeTemplate(template);
      }
    }
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
      .catch(any => this.setSheet(undefined));
  }

  private setTemplate(template: Template): void {
    this.template = template;
  }

  private setSheet(sheet: Sheet): void {
    this.sheet = sheet;
    this.sheetUpdatedSource.next(this.sheet);
  }

  private createSheet(template: Template): Sheet {
    return new Sheet(template);
  }
}
