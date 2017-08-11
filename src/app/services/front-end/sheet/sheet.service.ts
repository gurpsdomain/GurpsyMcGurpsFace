import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TemplateDM} from '../../../models/sheet/template/template.model';
import {JsonConvert} from 'json2typescript';
import {Sheet} from '../../../models/sheet/model/sheet.model';
import {TemplateStorageService} from '../../back-end/template-storage/template-storage.service';

@Injectable()
export class SheetService {
  private template: TemplateDM;
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

  constructor(private templateStorageService: TemplateStorageService) {
    this.initSheet();
  }

  /**
   * Create a template from file.
   *
   * @param {File} A json representative of a template
   */
  public createTemplateFromFile(file: File): Promise<TemplateDM> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            const jsonConvert = new JsonConvert();
            const template: TemplateDM = jsonConvert.deserialize(JSON.parse(fileReader.result), TemplateDM);
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
   * @param {TemplateDM} The new template.
   */
  public loadNewTemplate(template: TemplateDM): void {
    this.loadTemplate(template);
    this.templateStorageService.addTemplate(template);
    this.templateStorageService.selectTemplate(template);
  }

  /**
   * Load an existing template.
   *
   * @param {TemplateDM} The template.
   */
  public loadExistingTemplate(template: TemplateDM): void {
    this.loadTemplate(template);
    this.templateStorageService.selectTemplate(template);
  }


  /**
   * Update the template.
   *
   * @param {TemplateDM} The updated template.
   */
  public updateTemplate(template: TemplateDM): void {
    template.lastModified = new Date();
    this.loadTemplate(template);
    this.templateStorageService.updateTemplate(template);
  }

  /**
   * Return the template.
   *
   * @returns {Promise<TemplateDM>}
   */
  public getTemplate(): Promise<TemplateDM> {
    return Promise.resolve(this.template);
  }

  /**
   * Return the templates.
   *
   * @returns {Promise<TemplateDM[]>}
   */
  public getTemplates(): Promise<TemplateDM[]> {
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
   * to edit the TemplateDM. Consequently, this will lead to a new
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
   * to edit the TemplateDM. Consequently, this will lead to a new
   * template.
   *
   * @return {Promise<boolean>} A Promise that resolves to a boolean. True
   *          if this service is currently in edit mode, false otherwise.
   */
  public getEditMode(): Promise<boolean> {
    return Promise.resolve(this._editMode);
  }

  private loadTemplate(template: TemplateDM): void {
    this.setTemplate(template);
    const sheet = this.createSheet(template);
    this.setSheet(sheet)
    this.newSheetLoadedSource.next(this.sheet);
  }

  private initSheet(): void {
    this.loadSelectedTemplate();

    this.templateStorageService.templatesUpdated$.subscribe(templateDM => this.loadSelectedTemplate());
  }

  private loadSelectedTemplate(): void {
    this.templateStorageService.getSelectedTemplate()
      .then(template => this.loadTemplate(template))
      .catch(any => this.setSheet(undefined));
  }

  private setTemplate(template: TemplateDM): void {
    this.template = template;
  }

  private setSheet(sheet: Sheet): void {
    this.sheet = sheet;
    this.sheetUpdatedSource.next(this.sheet);
  }

  private createSheet(template: TemplateDM): Sheet {
    return new Sheet(template);
  }
}
