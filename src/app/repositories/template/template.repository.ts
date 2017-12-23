import {Injectable} from '@angular/core';
import {Template} from '../../models/template/template.model';
import {TemplateStore} from '../../models/template-store/template-store.model';
import {LoggingService} from '../../services/logging/logging.service';
import {JsonConvert} from 'json2typescript';
import {GurpsyConstants} from '../../gurpsy.constants';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TemplateRepository {

  private static STORAGE_KEY = '.templates';
  private static STORAGE_KEY_SELECTED = '.template';

  private templatesUpdated = new Subject<Template[]>();
  private selectedTemplateChanged = new Subject<Template>();

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
   * @param {Template} template
   */
  public addTemplate(template: Template): void {
    const templates: TemplateStore = this.getTemplatesDM();
    templates.addTemplate(template, true);
    try {
      this.persist(templates);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Add a new Template and set it as the selected.
   *
   * @param {Template} template
   */
  public addAndSelectTemplate(template: Template): void {
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
   * Return the selected Template
   *
   * @return {Promise<Template>}
   */
  public getSelectedTemplate(): Promise<Template> {
    const selectedTemplateId: string = this.getSelectedTemplateId();

    if (selectedTemplateId) {
      const retrievedTemplates = this.getTemplatesDM();
      return Promise.resolve(retrievedTemplates.getTemplate(selectedTemplateId));
    } else {
      return Promise.reject('No Template selected');
    }
  }

  /**
   * return the stored TemplateStore.
   *
   * @return {Promise<Template[]>}
   */
  public getTemplates(): Promise<Template[]> {
    return Promise.resolve(this.getTemplatesDM().templates);
  }

  /**
   * Set the given template as the selected template.
   *
   * @param {TemplateStore} templates
   */
  public selectTemplate(template: Template): void {
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
   * Delete the given Template from local storage.
   *
   * @param {Template} template
   */
  public deleteTemplate(template: Template): void {

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
   * Update the given Template. The previous version will be removed and the new one will be
   * added.
   *
   * @param {Template} The Template to update
   */
  public updateTemplate(template: Template): void {
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

  private persistSelectedTemplate(template: Template): void {
    try {
      sessionStorage.setItem(this.getSelectedTemplateStorageKey(), template.id);
    } catch (error) {
      this.loggingService.error('Unable to persist selected template. ', error);
      throw new Error('Unable to persist selected template');
    }
  }
}
