import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {Template} from '../../../../../models/sheet/template/template.model';
import {Templates} from '../../../../../models/sheet/templates.model';
import {LoggingService} from '../../../logging/logging.service';
import {JsonConvert} from 'json2typescript';

@Injectable()
export class TemplateStorageDelegate {

  private static STORAGE_KEY = '.sheets';

  private templateChangeSource = new Subject<Templates>();

  /**
   * Register to this observable to be notified when the value is changed
   * in Local Storage.
   *
   * @type {Observable<Templates>}
   */
  public valueChange$ = this.templateChangeSource.asObservable();

  constructor(private loggingService: LoggingService) {
    window.addEventListener(StorageService.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Set the given template as the Current template in Local Storage.
   *
   * @param {Template}
   */
  public setCurrent(template: Template): void {
    const templates: Templates = this.getTemplates();

    if (!this.isCurrent(templates, template)) {
      this.addCurrentAsPrevious(templates);
    }

    this.removeFromPrevious(templates, template);
    templates.current = template;

    this.persist(templates);
  }

  /**
   * Retrieve the Current Sheet for Local Storage.
   *
   * @returns Promise<Sheet> or an empty promise if there is no current template.
   */
  public retrieveCurrent(): Promise<Template> {
    const current: Template = this.getCurrentSheet();

    return Promise.resolve(current);
  }

  /**
   * Retrieve an array of Previously Opened Templates from Local Storage.
   *
   * @returns Promise<Sheet[]> or an empty promise if there are no previously stored templates.
   */
  public retrievePrevious(): Promise<Template[]> {
    const previous: Template[] = this.getPreviouslyOpenedSheets();

    return Promise.resolve(previous);
  }

  /**
   * Retrieve both the Current template and the Previously Opened template.
   *
   * @returns Promise<Sheet[]> or an empty promise if there are no current and previously
   *          stored templates.
   */
  public retrieveAll(): Promise<Template[]> {
    const current: Template = this.getCurrentSheet();
    const all: Template[] = this.getPreviouslyOpenedSheets();
    all.push(current);

    return Promise.resolve(all);
  }

  /**
   * Remove the given template from the list of Previously stored templates in Local Storage.
   * @param templatesToRemove : Sheet[]
   */
  public remove(templatesToRemove: Template[]): void {
    const previouslyOpenedSheets = this.getPreviouslyOpenedSheets();

    const newTemplateList: Template[] = [];

    for (const template of previouslyOpenedSheets) {
      let remove = false;
      for (const templateToRemove of templatesToRemove) {
        if (template.name === templateToRemove.name) {
          remove = true;
        }
      }

      if (!remove) {
        newTemplateList.push(template);
      }
    }

    const templates: Templates = this.getTemplates();
    templates.previous = newTemplateList;

    this.persist(templates);
  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public clear(): void {
    localStorage.removeItem(this.getStorageKey())
    this.change(undefined);
  }

  private persist(templates: Templates): void {
    const jsonConvert = new JsonConvert();
    const jsonSheets = JSON.stringify(jsonConvert.serialize(templates));

    localStorage.setItem(this.getStorageKey(), jsonSheets);
  }

  private removeFromPrevious(templates: Templates, template: Template): Templates {
    const newTemplates: Template[] = [];

    for (const templateIterator of templates.previous) {
      if (templateIterator && templateIterator.name !== template.name) {
        newTemplates.push(templateIterator);
      }
    }

    templates.previous = newTemplates;
    return templates;
  }

  private isCurrent(templates: Templates, template: Template): boolean {
    return templates.current && templates.current.name === template.name;
  }

  private addCurrentAsPrevious(templates: Templates): void {
    templates.previous.push(templates.current);
  }

  private getTemplates(): Templates {
    const json: string = localStorage.getItem(this.getStorageKey());

    return this.deserialize(json);
  }


  private deserialize(json: string): Templates {
    let templates: Templates = new Templates();

    if (json) {
      try {
        const jsonConvert = new JsonConvert();
        const jsonObject = JSON.parse(json);
        templates = jsonConvert.deserializeObject(jsonObject, Templates);
      } catch (ex) {
        this.loggingService.error('Unable to retrieve Templates from Local Storage.', ex)
      }
    }

    return templates;
  }

  private getCurrentSheet(): Template {
    return this.getTemplates().current;
  }

  private getPreviouslyOpenedSheets(): Template[] {
    return this.getTemplates().previous;
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + TemplateStorageDelegate.STORAGE_KEY;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getStorageKey()) {
      const templates = this.deserialize(event.newValue);
      this.change(templates);
    }
  }

  private change(templates: Templates) {
    this.templateChangeSource.next(templates);
  }
}
