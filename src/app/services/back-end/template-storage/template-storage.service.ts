import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TemplateDM} from '../../../models/sheet/template/template.model';
import {TemplatesDM} from '../../../models/templates/templates.model';
import {LoggingService} from '../logging/logging.service';
import {JsonConvert} from 'json2typescript';
import {GurpsyConstants} from '../../../gurpsy.constants';

@Injectable()
export class TemplateStorageService {

  private static STORAGE_KEY = '.templates';
  private static STORAGE_KEY_SELECTED = '.template';

  private templatesUpdated = new Subject<TemplateDM[]>();
  private selectedTemplateChanged = new Subject<TemplateDM>();

  /**
   * Register to this observable to be notified when one of the stored templates has been changed
   * in Local Storage.
   *
   * @type {Observable<TemplatesDM>}
   */
  public templatesUpdated$ = this.templatesUpdated.asObservable();

  /**
   * Register to this observable to be notified when the value of the selected
   * template has changed in Session Storage.
   *
   * @type {Observable<TemplatesDM>}
   */
  public selectedTemplateChanged$ = this.selectedTemplateChanged.asObservable();

  constructor(private loggingService: LoggingService) {
    window.addEventListener(GurpsyConstants.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Add the template to LocalStorage.
   *
   * @param {TemplateDM} template
   */
  public addTemplate(template: TemplateDM): void {
    const templates: TemplatesDM = this.getTemplatesDM();
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
   * Return the selected TemplateDM
   *
   * @return {Promise<TemplateDM>}
   */
  public getSelectedTemplate(): Promise<TemplateDM> {
    const selectedTemplateId: string = sessionStorage.getItem(this.getSelectedTemplateStorageKey());

    if (selectedTemplateId) {
      const retrievedTemplates = this.getTemplatesDM();
      return Promise.resolve(retrievedTemplates.getTemplate(selectedTemplateId));
    } else {
      return Promise.reject('No TemplateDM selected');
    }
  }

  /**
   * return the stored TemplatesDM.
   *
   * @return {Promise<TemplateDM[]>}
   */
  public getTemplates(): Promise<TemplateDM[]> {
    return Promise.resolve(this.getTemplatesDM().templates);
  }

  /**
   *
   * @param {TemplatesDM} templates
   */
  public selectTemplate(template: TemplateDM): void {
    this.addTemplate(template);
    sessionStorage.setItem(this.getSelectedTemplateStorageKey(), template.id);
  }

  /**
   * Update the given TemplateDM. The previous version will be removed and the new one will be
   * added.
   *
   * @param {TemplateDM} The TemplateDM to update
   */
  public updateTemplate(template: TemplateDM): void {
    const retrievedTemplates = this.getTemplatesDM();

    retrievedTemplates.updateTemplate(template);

    this.persist(retrievedTemplates);
  }

  private persist(templates: TemplatesDM): void {
    const jsonConvert = new JsonConvert();
    const jsonSheets = JSON.stringify(jsonConvert.serialize(templates));

    localStorage.setItem(this.getAllTemplatesStorageKey(), jsonSheets);
  }

  private getTemplatesDM(): TemplatesDM {
    const json: string = localStorage.getItem(this.getAllTemplatesStorageKey());

    return this.deserialize(json);
  }

  private deserialize(json: string): TemplatesDM {
    let templates: TemplatesDM = new TemplatesDM();

    if (json) {
      try {
        const jsonConvert = new JsonConvert();
        const jsonObject = JSON.parse(json);
        templates = jsonConvert.deserializeObject(jsonObject, TemplatesDM);
      } catch (ex) {
        this.loggingService.error('Unable to deserialize TemplatesDM from Local Storage.', ex)
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
