import {Injectable} from '@angular/core';
import {SettingsStorageDelegate} from './delegates/settings-storage-delegate/settings-storage-delegate';
import {TemplateStorageDelegate} from './delegates/template-storage-delegate/template-storage-delegate';
import {Observable} from 'rxjs';
import {SheetBodyContent} from '../../front-end/sheet-body/sheet-body.service';
import {Settings} from '../../../models/settings/settings.model';
import {Book} from '../../../models/settings/book.model';
import {Template} from '../../../models/sheet/template/template.model';
import {Sheets} from '../../../models/sheet/sheets.model';

@Injectable()
export class StorageService {

  public static STORAGE_KEY = 'gurpsy-mc-gurps-face';
  public static STORAGE_EVENT_LISTENER_KEY = 'storage';

  constructor(private settingsStorageDelegate: SettingsStorageDelegate,
              private templateStorageDelegate: TemplateStorageDelegate) {
  }

  /**
   * Acquire the Observer on which you can register yourself to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<Settings>
   */
  public getSettingsObserver(): Observable<Settings> {
    return this.settingsStorageDelegate.valueChange$;
  }

  /**
   * Acquire the Observer on which you can register yourself to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<Sheets>
   */
  public getSheetObserver(): Observable<Sheets> {
    return this.templateStorageDelegate.valueChange$;
  }

  /**
   * Store the given BodyContent in Local Storage;
   *
   * @param SheetBodyContent
   */
  public storeBodyContent(bodyContent: SheetBodyContent) {
    this.settingsStorageDelegate.storeBodyContent(bodyContent);
  }

  /**
   * Store the given BookConfigurations in Local Storage;
   *
   * @param BookConfiguration[]
   */
  public storeBookConfigurations(bookConfigurations: Book[]) {
    this.settingsStorageDelegate.storeBookConfigurations(bookConfigurations);
  }


  /**
   * Store the given metrics in Local Storage;
   *
   * @param String
   */
  public storeMetrics(metrics: string) {
    this.settingsStorageDelegate.storeMetrics(metrics);
  }

  /**
   * Store the given template in Local Storage;
   *
   * @param {Template}
   */
  public storeTemplate(template: Template): void {
    this.templateStorageDelegate.setCurrent(template);
  }

  /**
   * Store the given theme in Local Storage;
   *
   * @param String
   */
  public storeTheme(theme: string) {
    this.settingsStorageDelegate.storeTheme(theme);
  }

  /**
   * Retrieve the given BodyContent from Locale Storage.
   *
   * @returns Promise<SheetBodyContent>
   */
  public getBodyContent(): Promise<SheetBodyContent> {
    return this.settingsStorageDelegate.retrieveBodyContent();
  }

  /**
   * Retrieve the given BookConfigurations from Locale Storage.
   *
   * @returns Promise<BookConfiguration[]>
   */
  public getBookConfigurations(): Promise<Book[]> {
    return this.settingsStorageDelegate.retrieveBookConfigurations();
  }

  /**
   * Retrieve the given metrics from Locale Storage.
   *
   * @returns metrics: Promise<String>
   */
  public getMetrics(): Promise<string> {
    return this.settingsStorageDelegate.retrieveMetrics();
  }

  /**
   * Retrieve the Current Template for Local Storage.
   *
   * @returns Promise<Template> or an empty promise if there is no current template.
   */
  public getCurrentSheet(): Promise<Template> {
    return this.templateStorageDelegate.retrieveCurrent();
  }

  /**
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<Template[]> or an empty promise if there are no previously opened templates.
   */
  public getPreviouslyOpenedSheets(): Promise<Template[]> {
    return this.templateStorageDelegate.retrievePrevious();
  }

  /**
   * Retrieve all Templates from Local Storage.
   *
   * @returns Promise<Template[]> or an empty Promise if there are no templates.
   */
  public getTemplates(): Promise<Template[]> {
    return this.templateStorageDelegate.retrieveAll();
  }

  /**
   * Retrieve the given theme from Locale Storage.
   *
   * @returns theme: Promise<String>
   */
  public getTheme(): Promise<string> {
    return this.settingsStorageDelegate.retrieveTheme();
  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public clearStorage(): void {
    this.settingsStorageDelegate.clear();
    this.templateStorageDelegate.clear();
  }
}


