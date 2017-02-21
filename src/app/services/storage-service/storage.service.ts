import {Injectable} from '@angular/core';
import {ThemeStorageDelegate} from './delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from './delegates/language-storage-delegate/language-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {Sheet} from '../../model/sheet';

@Injectable()
export class StorageService {

  public static STORAGE_KEY = 'gurpsy-mc-gurps-face';
  public static STORAGE_EVENT_LISTENER_KEY = 'storage';

  private languageStorageDelegate: LanguageStorageDelegate;
  private sheetStorageDelegate: SheetStorageDelegate;
  private themeStorageDelegate: ThemeStorageDelegate;

  constructor(themeStorageDelegate: ThemeStorageDelegate,
              languageStorageDelegate: LanguageStorageDelegate,
              sheetStorageDelegate: SheetStorageDelegate) {
    this.languageStorageDelegate = languageStorageDelegate;
    this.sheetStorageDelegate = sheetStorageDelegate;
    this.themeStorageDelegate = themeStorageDelegate;
  }

  public getLanguageObserver() {
    return this.languageStorageDelegate.valueChange$;
  }

  public getSheetObserver() {
    return this.sheetStorageDelegate.valueChange$;
  }

  public getThemeObserver() {
    return this.themeStorageDelegate.valueChange$;
  }

  public storeLanguage(locale: string): void {
    this.languageStorageDelegate.store(locale);
  }

  public storeSheet(sheet: Sheet): void {
    this.sheetStorageDelegate.setCurrent(sheet);
  }

  public storeTheme(theme: string) {
    this.themeStorageDelegate.store(theme);
  }

  public getCurrentSheet(): Promise<Sheet> {
    return this.sheetStorageDelegate.retrieveCurrent();
  }

  public getPreviouslyOpenedSheets(): Promise<Sheet[]> {
      return this.sheetStorageDelegate.retrievePrevious();
  }

  public getSheets(): Promise<Sheet[]> {
    return this.sheetStorageDelegate.retrieveAll();
  }

  public getLanguage(): Promise<string> {
    return this.languageStorageDelegate.retrieve();
  }

  public getTheme(): Promise<string> {
    return this.themeStorageDelegate.retrieve();
  }

  public clearStorage(clearLanguage: boolean, clearTheme: boolean, sheetsToDelete: Sheet[]): void {
    if (clearLanguage) {
      this.languageStorageDelegate.clear();
    }
    if (clearTheme) {
      this.themeStorageDelegate.clear();
    }
    if (sheetsToDelete.length > 0) {
      this.sheetStorageDelegate.remove(sheetsToDelete);
    }
  }
}


