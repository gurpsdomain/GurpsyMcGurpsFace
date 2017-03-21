import {Injectable} from '@angular/core';
import {ThemeStorageDelegate} from './delegates/theme-storage-delegate/theme-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {Sheet} from '../../model/sheet';

@Injectable()
export class StorageService {

  public static STORAGE_KEY = 'gurpsy-mc-gurps-face';
  public static STORAGE_EVENT_LISTENER_KEY = 'storage';

  private sheetStorageDelegate: SheetStorageDelegate;
  private themeStorageDelegate: ThemeStorageDelegate;

  constructor(themeStorageDelegate: ThemeStorageDelegate,
              sheetStorageDelegate: SheetStorageDelegate) {
    this.sheetStorageDelegate = sheetStorageDelegate;
    this.themeStorageDelegate = themeStorageDelegate;
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
   * @type Observable<string>
   */
  public getThemeObserver() {
    return this.themeStorageDelegate.valueChange$;
  }

  /**
   * Store the given theme in Local Storage;
   *
   * @param sheet : Sheet
   */
  public storeSheet(sheet: Sheet): void {
    this.sheetStorageDelegate.setCurrent(sheet);
  }

  /**
   * Store the given theme in Local Storage;
   *
   * @param theme : String
   */
  public storeTheme(theme: string) {
    this.themeStorageDelegate.store(theme);
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
   * @returns locale: Promise<String>
   */
  public getTheme(): Promise<string> {
    return this.themeStorageDelegate.retrieve();
  }

  /**
   * Clear the stored entries from Local Storage.
   *
   * @param clearTheme: boolean     Clear the Theme Setting
   * @param sheetsToDelete: Sheet[] An Array of Sheets that should be deleted.
   */
  public clearStorage(clearTheme: boolean, sheetsToDelete: Sheet[]): void {
    if (clearTheme) {
      this.themeStorageDelegate.clear();
    }
    if (sheetsToDelete.length > 0) {
      this.sheetStorageDelegate.remove(sheetsToDelete);
    }
  }
}


