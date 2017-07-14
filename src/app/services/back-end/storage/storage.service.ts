import {Injectable} from '@angular/core';
import {SettingsStorageDelegate} from './delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {Observable} from 'rxjs';
import {SheetBodyContent} from '../../front-end/sheet-body/sheet-body.service';
import {Settings} from '../../../models/settings/settings.model';
import {Book} from '../../../models/settings/book.model';
import {UpdateSheet} from '../../../models/sheet/update/update-sheet.model';
import {Sheets} from '../../../models/sheet/sheets.model';

@Injectable()
export class StorageService {

  public static STORAGE_KEY = 'gurpsy-mc-gurps-face';
  public static STORAGE_EVENT_LISTENER_KEY = 'storage';

  constructor(private settingsStorageDelegate: SettingsStorageDelegate,
              private sheetStorageDelegate: SheetStorageDelegate) {
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
    return this.sheetStorageDelegate.valueChange$;
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
   * Store the given readSheet in Local Storage;
   *
   * @param InputSheet
   */
  public storeSheet(sheet: UpdateSheet): void {
    this.sheetStorageDelegate.setCurrent(sheet);
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
   * Retrieve the Current UpdateSheet for Local Storage.
   *
   * @returns Promise<UpdateSheet> or an empty promise if there is no current readSheet.
   */
  public getCurrentSheet(): Promise<UpdateSheet> {
    return this.sheetStorageDelegate.retrieveCurrent();
  }

  /**
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<UpdateSheet[]> or an empty promise if there are no previously opened sheets.
   */
  public getPreviouslyOpenedSheets(): Promise<UpdateSheet[]> {
    return this.sheetStorageDelegate.retrievePrevious();
  }

  /**
   * Retrieve both the Current readSheet and the previously opened readSheet.
   *
   * @returns Promise<UpdateSheet[]> or an empty promise if there are no current and previously
   *          opened sheets.
   */
  public getSheets(): Promise<UpdateSheet[]> {
    return this.sheetStorageDelegate.retrieveAll();
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
    this.sheetStorageDelegate.clear();
  }
}


