import {Injectable} from '@angular/core';
import {ConfigStorageDelegate} from './delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {Sheet} from '../../model/sheet';
import {Observable} from 'rxjs';
import {Config} from '../../model/config/config';
import {SheetBodyContent} from '../sheet-body-service/sheet-body.service';

@Injectable()
export class StorageService {

  public static STORAGE_KEY = 'gurpsy-mc-gurps-face';
  public static STORAGE_EVENT_LISTENER_KEY = 'storage';

  private sheetStorageDelegate: SheetStorageDelegate;
  private configStorageDelegate: ConfigStorageDelegate;

  constructor(configStorageDelegate: ConfigStorageDelegate,
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
   * Store the given sheet in Local Storage;
   *
   * @param sheet : Sheet
   */
  public storeSheet(sheet: Sheet): void {
    this.sheetStorageDelegate.setCurrent(sheet);
  }

  /**
   * Store the given BodyContent in Local Storage;
   *
   * @param bodyContent : SheetBodyContent
   */
  public storeBodyContent(bodyContent: SheetBodyContent) {
    this.configStorageDelegate.storeBodyContent(bodyContent);
  }

  /**
   * Store the given theme in Local Storage;
   *
   * @param theme : String
   */
  public storeTheme(theme: string) {
    this.configStorageDelegate.storeTheme(theme);
  }

  /**
   * Retrieve the given BodyContent from Locale Storage.
   *
   * @returns theme: Promise<SheetBodyContent>
   */
  public getBodyContent(): Promise<SheetBodyContent> {
    return this.configStorageDelegate.retrieveBodyContent();
  }

  /**
   * Retrieve the Current Sheet for Local Storage.
   *
   * @returns Promise<Sheet> or an empty promise if there is no current sheet.
   */
  public getCurrentSheet(): Promise<Sheet> {
    return this.sheetStorageDelegate.retrieveCurrent();
  }

  /**
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<Sheet[]> or an empty promise if there are no previously opened sheets.
   */
  public getPreviouslyOpenedSheets(): Promise<Sheet[]> {
    return this.sheetStorageDelegate.retrievePrevious();
  }

  /**
   * Retrieve both the Current sheet and the Previously Opened sheet.
   *
   * @returns Promise<Sheet[]> or an empty promise if there are no current and previously
   *          opened sheets.
   */
  public getSheets(): Promise<Sheet[]> {
    return this.sheetStorageDelegate.retrieveAll();
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
   * @param sheetsToDelete: Sheet[] An Array of Sheets that should be deleted.
   */
  public clearStorage(clearConfig: boolean, sheetsToDelete: Sheet[]): void {
    if (clearConfig) {
      this.configStorageDelegate.clear();
    }
    if (sheetsToDelete.length > 0) {
      this.sheetStorageDelegate.remove(sheetsToDelete);
    }
  }
}


