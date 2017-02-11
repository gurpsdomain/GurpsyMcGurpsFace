import {Injectable} from '@angular/core';
import {ThemeStorageDelegate} from './delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from './delegates/language-storage-delegate/language-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {Sheet} from '../../model/sheet/sheet';

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
    this.languageStorageDelegate.storeLanguage(locale);
  }

  public storeSheet(sheet: Sheet): void {
    this.sheetStorageDelegate.storeSheet(sheet);
  }

  public storeTheme(theme: string) {
    this.themeStorageDelegate.persistTheme(theme);
  }

  public getCurrentSheet(): Promise<Sheet> {
    return this.sheetStorageDelegate.getCurrentSheet();
  }

  public getLanguage(): Promise<string> {
    return this.languageStorageDelegate.getLanguage();
  }

  public getTheme(): Promise<string> {
    return this.themeStorageDelegate.getTheme();
  }

  public clearStorage(): void {
    this.themeStorageDelegate.clear();
    this.languageStorageDelegate.clear();
  }
}


