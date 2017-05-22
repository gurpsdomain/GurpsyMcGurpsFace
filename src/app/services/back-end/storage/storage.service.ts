import {Injectable} from '@angular/core';
import {SettingsStorageDelegate} from './delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {Observable} from 'rxjs';
import {Config} from '../../../models/config/config';
import {SheetBodyContent} from '../../front-end/sheet-body/sheet-body.service';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';
import {InputSheet} from '../../../models/sheet/input';

@Injectable()
export class StorageService {

  public static STORAGE_KEY = 'gurpsy-mc-gurps-face';
  public static STORAGE_EVENT_LISTENER_KEY = 'storage';

  private sheetStorageDelegate: SheetStorageDelegate;
  private configStorageDelegate: SettingsStorageDelegate;

  constructor(configStorageDelegate: SettingsStorageDelegate,
              sheetStorageDelegate: SheetStorageDelegate) {
    this.sheetStorageDelegate = sheetStorageDelegate;
    this.configStorageDelegate = configStorageDelegate;
  }

  /**
   * Acquire the Observer on which you can register yourself to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<string>
   */
  public getSheetObserver() {
    return this.sheetStorageDelegate.valueChange$;
  }

  /**
   * Acquire the Observer on which you can register yourself to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<Config>
   */
  public getConfigObserver(): Observable<Config> {
    return this.configStorageDelegate.valueChange$;
  }

  /**
   * Store the given BodyContent in Local Storage;
   *
   * @param SheetBodyContent
   */
  public storeBodyContent(bodyContent: SheetBodyContent) {
    this.configStorageDelegate.storeBodyContent(bodyContent);
  }

  /**
   * Store the given BookConfigurations in Local Storage;
   *
   * @param BookConfiguration[]
   */
  public storeBookConfigurations(bookConfigurations: BookConfiguration[]) {
    this.configStorageDelegate.storeBookConfigurations(bookConfigurations);
  }

  /**
   * Store the given sheet in Local Storage;
   *
   * @param InputSheet
   */
  public storeSheet(sheet: InputSheet): void {
    this.sheetStorageDelegate.setCurrent(sheet);
  }

  /**
   * Store the given serverUrl in Local Storage;
   *
   * @param String
   */
  public storeServerUrl(serverUrl: string) {
    this.configStorageDelegate.storeServerUrl(serverUrl);
  }

  /**
   * Store the given theme in Local Storage;
   *
   * @param String
   */
  public storeTheme(theme: string) {
    this.configStorageDelegate.storeTheme(theme);
  }

  /**
   * Retrieve the given BodyContent from Locale Storage.
   *
   * @returns Promise<SheetBodyContent>
   */
  public getBodyContent(): Promise<SheetBodyContent> {
    return this.configStorageDelegate.retrieveBodyContent();
  }

  /**
   * Retrieve the given BookConfigurations from Locale Storage.
   *
   * @returns Promise<BookConfiguration[]>
   */
  public getBookConfigurations(): Promise<BookConfiguration[]> {
    return this.configStorageDelegate.retrieveBookConfigurations();
  }

  /**
   * Retrieve the Current InputSheet for Local Storage.
   *
   * @returns Promise<InputSheet> or an empty promise if there is no current sheet.
   */
  public getCurrentSheet(): Promise<InputSheet> {
    return this.sheetStorageDelegate.retrieveCurrent();
  }

  /**
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<InputSheet[]> or an empty promise if there are no previously opened sheets.
   */
  public getPreviouslyOpenedSheets(): Promise<InputSheet[]> {
    return this.sheetStorageDelegate.retrievePrevious();
  }

  /**
   * Retrieve both the Current sheet and the previously opened sheet.
   *
   * @returns Promise<InputSheet[]> or an empty promise if there are no current and previously
   *          opened sheets.
   */
  public getSheets(): Promise<InputSheet[]> {
    return this.sheetStorageDelegate.retrieveAll();
  }

  /**
   * Retrieve the given serverUrl from Locale Storage.
   *
   * @returns serverUrl: Promise<String>
   */
  public getServerUrl(): Promise<string> {
    return this.configStorageDelegate.retrieveServerUrl();
  }


  /**
   * Retrieve the given theme from Locale Storage.
   *
   * @returns theme: Promise<String>
   */
  public getTheme(): Promise<string> {
    return this.configStorageDelegate.retrieveTheme();
  }

  /**
   * Clear the stored entries from Local Storage.
   *
   * @param clearConfig: boolean     Clear the config
   * @param sheetsToDelete: InputSheet[] An Array of Sheets that should be deleted.
   */
  public clearStorage(clearConfig: boolean, sheetsToDelete: InputSheet[]): void {
    if (clearConfig) {
      this.configStorageDelegate.clear();
    }
    if (sheetsToDelete.length > 0) {
      this.sheetStorageDelegate.remove(sheetsToDelete);
    }
  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public kill(): void {
    this.configStorageDelegate.clear();
    this.sheetStorageDelegate.kill();
  }
}


