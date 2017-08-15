import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SheetTemplate} from '../../../models/sheet-template/sheet-template.model';
import {TemplateStore} from '../../../models/template-store/template-store.model';
import {LoggingService} from '../logging/logging.service';
import {JsonConvert} from 'json2typescript';
import {GurpsyConstants} from '../../../gurpsy.constants';

@Injectable()
export class TemplateStorageService {

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
    templates.addTemplate(template);
    this.persist(templates);
  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public clear(): void {
    localStorage.removeItem(this.getAllTemplatesStorageKey());
    this.templatesUpdated.next([]);
    sessionStorage.removeItem(this.getSelectedTemplateStorageKey());
    this.selectedTemplateChanged.next();
  }

  /**
   * Return the selected SheetTemplate
   *
   * @return {Promise<SheetTemplate>}
   */
  public getSelectedTemplate(): Promise<SheetTemplate> {
    const selectedTemplateId: string = sessionStorage.getItem(this.getSelectedTemplateStorageKey());

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
   *
   * @param {TemplateStore} templates
   */
  public selectTemplate(template: SheetTemplate): void {
    this.addTemplate(template);
    sessionStorage.setItem(this.getSelectedTemplateStorageKey(), template.id);
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

    this.persist(retrievedTemplates);
  }

  private persist(templates: TemplateStore): void {
    const jsonConvert = new JsonConvert();
    const jsonSheets = JSON.stringify(jsonConvert.serialize(templates));

    localStorage.setItem(this.getAllTemplatesStorageKey(), jsonSheets);
  }

  private getTemplatesDM(): TemplateStore {
    const json: string = localStorage.getItem(this.getAllTemplatesStorageKey());

    return this.deserialize(json);
  }

  private deserialize(json: string): TemplateStore {
    let templates: TemplateStore = new TemplateStore();

    if (json) {
      try {
        const jsonConvert = new JsonConvert();
        const jsonObject = JSON.parse(json);
        templates = jsonConvert.deserializeObject(jsonObject, TemplateStore);
      } catch (ex) {
        this.loggingService.error('Unable to deserialize TemplateStore from Local Storage.', ex)
      }
    }

    return templates;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getAllTemplatesStorageKey()) {
      const templates = this.deserialize(event.newValue);
      this.templatesUpdated.next(templates.templates)
    } else if (event.key === this.getSelectedTemplateStorageKey()) {
      this.selectedTemplateChanged.next()
    }
  }

  private getAllTemplatesStorageKey(): string {
    return GurpsyConstants.GURPSY_STORAGE_KEY + TemplateStorageService.STORAGE_KEY;
  }

  private getSelectedTemplateStorageKey(): string {
    return GurpsyConstants.GURPSY_STORAGE_KEY + TemplateStorageService.STORAGE_KEY_SELECTED;
  }
}
