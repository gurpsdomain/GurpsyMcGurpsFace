import {Injectable} from '@angular/core';
import {SheetTemplate} from '../../models/sheet-template/sheet-template.model';
import {TemplateStore} from '../../models/template-store/template-store.model';
import {LoggingService} from '../../services/logging/logging.service';
import {JsonConvert} from 'json2typescript';
import {GurpsyConstants} from '../../gurpsy.constants';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TemplateRepository {

  private static STORAGE_KEY = '.templates';
  private static STORAGE_KEY_SELECTED = '.template';

  private templatesUpdated = new Subject<SheetTemplate[]>();
  private selectedTemplateChanged = new Subject<SheetTemplate>();

  /**
   * Register to this observable to be notified when one of the stored templates has been changed
   * in Local Storage.
   *
   * @type {Observable<TemplateStore>}
   */
  public templatesUpdated$ = this.templatesUpdated.asObservable();

  /**
   * Register to this observable to be notified when the value of the selected
   * template has changed in Session Storage.
   *
   * @type {Observable<TemplateStore>}
   */
  public selectedTemplateChanged$ = this.selectedTemplateChanged.asObservable();

  constructor(private loggingService: LoggingService) {
    window.addEventListener(GurpsyConstants.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Add the template to LocalStorage.
   *
   * @param {SheetTemplate} template
   */
  public addTemplate(template: SheetTemplate): void {
    const templates: TemplateStore = this.getTemplatesDM();
    templates.addTemplate(template, true);
    try {
      this.persist(templates);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Add a new SheetTemplate and set it as the selected.
   *
   * @param {SheetTemplate} template
   */
  public addAndSelectTemplate(template: SheetTemplate): void {
    this.persistSelectedTemplate(template);

    try {
      this.addTemplate(template);
    } catch (error) {
      throw error;
    }

  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public clear(): void {
    this.clearTemplates();
    this.clearSelectedTemplate();
  }

  /**
   * Return the selected SheetTemplate
   *
   * @return {Promise<SheetTemplate>}
   */
  public getSelectedTemplate(): Promise<SheetTemplate> {
    const selectedTemplateId: string = this.getSelectedTemplateId();

    if (selectedTemplateId) {
      const retrievedTemplates = this.getTemplatesDM();
      return Promise.resolve(retrievedTemplates.getTemplate(selectedTemplateId));
    } else {
      return Promise.reject('No SheetTemplate selected');
    }
  }

  /**
   * return the stored TemplateStore.
   *
   * @return {Promise<SheetTemplate[]>}
   */
  public getTemplates(): Promise<SheetTemplate[]> {
    return Promise.resolve(this.getTemplatesDM().templates);
  }

  /**
   * Set the given template as the selected template.
   *
   * @param {TemplateStore} templates
   */
  public selectTemplate(template: SheetTemplate): void {
    try {
      this.persistSelectedTemplate(template);
    } catch (error) {
      throw error;
    }

    this.selectedTemplateChanged.next();
  }


  /**
   * Deselect the current template. This means there is no selected Template in Session Storage
   */
  public deselectTemplate(): void {
    this.clearSelectedTemplate();
  }

  /**
   * Delete the given SheetTemplate from local storage.
   *
   * @param {SheetTemplate} template
   */
  public deleteTemplate(template: SheetTemplate): void {

    const retrievedTemplates = this.getTemplatesDM();

    retrievedTemplates.deleteTemplate(template);

    if (this.getSelectedTemplateId() === template.id) {
      this.deselectTemplate();
    }

    try {
      this.persist(retrievedTemplates);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update the given SheetTemplate. The previous version will be removed and the new one will be
   * added.
   *
   * @param {SheetTemplate} The SheetTemplate to update
   */
  public updateTemplate(template: SheetTemplate): void {
    const retrievedTemplates = this.getTemplatesDM();

    retrievedTemplates.updateTemplate(template);

    try {
      this.persist(retrievedTemplates);
    } catch (error) {
      throw error;
    }
  }

  private clearSelectedTemplate(): void {
    sessionStorage.removeItem(this.getSelectedTemplateStorageKey());
    this.selectedTemplateChanged.next();
  }

  private clearTemplates(): void {
    localStorage.removeItem(this.getAllTemplatesStorageKey());
    this.templatesUpdated.next([]);
  }

  private persist(templates: TemplateStore): void {
    const jsonConvert = new JsonConvert();
    const jsonSheets = JSON.stringify(jsonConvert.serialize(templates));

    try {
      localStorage.setItem(this.getAllTemplatesStorageKey(), jsonSheets);
    } catch (error) {
      this.loggingService.error('Unable to persist new template. ', error);
      throw new Error('Unable to persist new template');
    }

    this.templatesUpdated.next(templates.templates);
  }

  private getTemplatesDM(): TemplateStore {
    const json: string = localStorage.getItem(this.getAllTemplatesStorageKey());

    return this.deserialize(json);
  }

  private getSelectedTemplateId(): string {
    const selectedTemplateId: string = sessionStorage.getItem(this.getSelectedTemplateStorageKey());

    return selectedTemplateId;
  }

  private deserialize(json: string): TemplateStore {
    let templates: TemplateStore = new TemplateStore();

    if (json) {
      try {
        const jsonConvert = new JsonConvert();
        const jsonObject = JSON.parse(json);
        templates = jsonConvert.deserializeObject(jsonObject, TemplateStore);
      } catch (ex) {
        this.loggingService.error('Unable to deserialize TemplateStore from Local Storage.', ex);
      }
    }

    return templates;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getAllTemplatesStorageKey()) {
      const templates = this.deserialize(event.newValue);
      this.templatesUpdated.next(templates.templates);
    } else if (event.key === this.getSelectedTemplateStorageKey()) {
      this.selectedTemplateChanged.next();
    }
  }

  private getAllTemplatesStorageKey(): string {
    return GurpsyConstants.GURPSY_STORAGE_KEY + TemplateRepository.STORAGE_KEY;
  }

  private getSelectedTemplateStorageKey(): string {
    return GurpsyConstants.GURPSY_STORAGE_KEY + TemplateRepository.STORAGE_KEY_SELECTED;
  }

  private persistSelectedTemplate(template: SheetTemplate): void {
    try {
      sessionStorage.setItem(this.getSelectedTemplateStorageKey(), template.id);
    } catch (error) {
      this.loggingService.error('Unable to persist selected template. ', error);
      throw new Error('Unable to persist selected template');
    }
  }
}
