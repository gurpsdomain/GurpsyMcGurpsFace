import {Injectable} from '@angular/core';
import {ThemeStorageDelegate} from './delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from './delegates/language-storage-delegate/language-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonSheet} from '../../model/json/sheet';

@Injectable()
export class StorageService {

  public static STORAGE_KEY = 'gurpsy-mc-gurps-face';

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

  public storeSheet(sheet: JsonSheet): void {
    this.sheetStorageDelegate.setCurrent(sheet);
  }

  public storeTheme(theme: string) {
    this.themeStorageDelegate.store(theme);
  }

  public getCurrentSheet(): Promise<JsonSheet> {
    return this.sheetStorageDelegate.retrieveCurrent();
  }

  public getSheets(): Promise<JsonSheet[]> {
    return this.sheetStorageDelegate.retrieveAll();
  }

  public getLanguage(): Promise<string> {
    return this.languageStorageDelegate.retrieve();
  }

  public getTheme(): Promise<string> {
    return this.themeStorageDelegate.retrieve();
  }

  public clearStorage(clearLanguage: boolean, clearTheme: boolean): void {
    if (clearLanguage) {
      this.languageStorageDelegate.clear();
    }
    if (clearTheme) {
      this.themeStorageDelegate.clear();
    }
  }
}


