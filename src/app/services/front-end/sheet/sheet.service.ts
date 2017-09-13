import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SheetTemplate} from '../../../models/sheet-template/sheet-template.model';
import {JsonConvert} from 'json2typescript';
import {Sheet} from '../../../models/sheet/sheet.model';
import {TemplateStorageService} from '../../back-end/template-storage/template-storage.service';

@Injectable()
export class SheetService {
  private template: SheetTemplate;
  private sheet: Sheet;

  private _editMode = false;
  private editModeChangeSource = new Subject<boolean>();
  private newSheetLoadedSource = new Subject<Sheet>();
  private sheetUpdatedSource = new Subject<Sheet>();
  private templatesUpdatedSource = new Subject<SheetTemplate[]>();

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

  /**
   * Register to this observable to be notified when the templates are updated.
   *
   * @type Observable
   */
  public templatesUpdated$ = this.templatesUpdatedSource.asObservable();

  constructor(private templateStorageService: TemplateStorageService) {
    this.initSheet();
  }

  /**
   * Close the currently opened template.
   */
  public closeTemplate(): void {
    this.templateStorageService.deselectTemplate();
  }

  /**
   * Create a template from file.
   *
   * @param {File} A json representative of a template
   */
  public createTemplateFromFile(file: File): Promise<SheetTemplate> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            const jsonConvert = new JsonConvert();
            const template: SheetTemplate = jsonConvert.deserialize(JSON.parse(fileReader.result), SheetTemplate);
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
   * @param {SheetTemplate} The new template.
   */
  public loadNewTemplate(template: SheetTemplate): void {
    this.loadTemplate(template);
    this.templateStorageService.addTemplate(template);
    this.templateStorageService.selectTemplate(template);
  }

  /**
   * Load an existing template.
   *
   * @param {SheetTemplate} The template.
   */
  public loadExistingTemplate(template: SheetTemplate): void {
    this.loadTemplate(template);
    this.templateStorageService.selectTemplate(template);
  }


  /**
   * Update the template.
   *
   * @param {SheetTemplate} The updated template.
   */
  public updateTemplate(template: SheetTemplate): void {
    template.lastModified = new Date();
    this.loadTemplate(template);
    this.templateStorageService.updateTemplate(template);
  }

  /**
   * Return the template.
   *
   * @returns {Promise<SheetTemplate>}
   */
  public getTemplate(): Promise<SheetTemplate> {
    return Promise.resolve(this.template);
  }

  /**
   * Return the template for a given id. If that template does not exist, the Promise is rejected
   *
   * @param {string} id
   * @return {Promise<SheetTemplate>}
   */
  public async getTemplateForId(id: string): Promise<SheetTemplate> {

    const templates = await this.templateStorageService.getTemplates();
    let foundTemplate: SheetTemplate = undefined;

    for (const storedTemplate of templates) {
      if (storedTemplate.id === id) {
        foundTemplate = storedTemplate;
        break;
      }
    }

    if (foundTemplate) {
      return Promise.resolve(foundTemplate);
    } else {
      return Promise.reject('No template available for the given id');
    }
  }

  /**
   * Return the templates.
   *
   * @returns {Promise<SheetTemplate[]>}
   */
  public getTemplates(): Promise<SheetTemplate[]> {
    return this.templateStorageService.getTemplates();
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
   * to edit the SheetTemplate. Consequently, this will lead to a new
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
   * to edit the SheetTemplate. Consequently, this will lead to a new
   * template.
   *
   * @return {Promise<boolean>} A Promise that resolves to a boolean. True
   *          if this service is currently in edit mode, false otherwise.
   */
  public getEditMode(): Promise<boolean> {
    return Promise.resolve(this._editMode);
  }

  private loadTemplate(template: SheetTemplate): void {
    this.setTemplate(template);
    const sheet = this.createSheet(template);
    this.setSheet(sheet)
    this.newSheetLoadedSource.next(this.sheet);
  }

  private initSheet(): void {
    this.loadSelectedTemplate();

    this.templateStorageService.selectedTemplateChanged$.subscribe(template => this.loadSelectedTemplate());

    this.templateStorageService.templatesUpdated$.subscribe(templates => this.loadSelectedTemplate());
    this.templateStorageService.templatesUpdated$.subscribe(templates => this.templatesUpdatedSource.next(templates));
  }

  private loadSelectedTemplate(): void {
    this.templateStorageService.getSelectedTemplate()
      .then(template => this.loadTemplate(template))
      .catch(any => this.setSheet(undefined));
  }

  private setTemplate(template: SheetTemplate): void {
    this.template = template;
  }

  private setSheet(sheet: Sheet): void {
    this.sheet = sheet;
    this.sheetUpdatedSource.next(this.sheet);
  }

  private createSheet(template: SheetTemplate): Sheet {
    return new Sheet(template);
  }
}
