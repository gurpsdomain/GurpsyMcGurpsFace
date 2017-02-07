import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {SheetMap, SheetMapEntry} from '../../model/json/sheetmap';
import {SheetMapImpl, SheetMapEntryImpl} from '../../model/json/sheetmap-impl';
import {Sheet} from '../../model/sheet/sheet';

@Injectable()
export class StorageService {

  private static STORAGE_KEY: string = 'gurpsy-mc-gurps-face';
  private static STORAGE_KEY_THEME: string = '.theme';
  private static STORAGE_KEY_LANGUAGE: string = '.language';
  private static STORAGE_KEY_SHEET: string = '.sheet';


  private themeChangeSource = new Subject<string>();
  private languageChangeSource = new Subject<string>();
  private sheetChangeSource = new Subject<string>();

  public themeChange$ = this.themeChangeSource.asObservable();
  public languageChange$ = this.languageChangeSource.asObservable();
  public sheetChange$ = this.sheetChangeSource.asObservable();

  constructor() {
    this.initStorageListener();
  }

  public presistSheet(sheet: Sheet) {
    let jsonSheet = JSON.stringify(sheet);
    let sheetName = this.getSheetNameKey(sheet);
    localStorage.setItem(this.getSheetStorageKey(sheetName), jsonSheet);
    this.addToSheetMapper(sheet);
  }

  private getSheetName(sheet: Sheet): string {
    return sheet.identity.name;
  }

  private getSheetNameKey(sheet: Sheet): string {
    let sheetNameKey: string = this.getSheetName(sheet).replace(' ', '-').toLowerCase();
    return sheetNameKey;
  }

  public getCurrentSheet(): Promise<Sheet> {
    let sheetMap: SheetMap = this.getSheetMapper();

    if (!sheetMap) {
      return Promise.reject('Sheet unavailable');
    }

    let currentSheetName: string = sheetMap.current;
    let currentSheetKey: string;

    for (let sheet of sheetMap.sheets) {
      if (currentSheetName === sheet.name) {
        currentSheetKey = sheet.sheet;
      }
    }

    let sheet: string = localStorage.getItem(this.getSheetStorageKey(currentSheetKey));

    if (sheet) {
      return Promise.resolve(JSON.parse(sheet));
    } else {
      return Promise.reject('Sheet unavailable');
    }
  }

  public getSheet(characterName: string): Promise<string> {
    let sheet: string = localStorage.getItem(this.getSheetStorageKey(characterName));

    if (sheet) {
      return Promise.resolve(sheet);
    } else {
      return Promise.reject('');
    }
  }

  private addToSheetMapper(sheet: Sheet): void {
    let sheetMap: SheetMap = this.getSheetMapper();

    if (!sheetMap) {
      sheetMap = new SheetMapImpl();
      sheetMap.sheets = [];
    }

    sheetMap.current = this.getSheetName(sheet);
    this.updateSheetMap(sheetMap, sheet);
    this.persistSheetMap(sheetMap);
  }

  private updateSheetMap(sheetMap: SheetMap, sheet: Sheet): void {
    let sheetMapSheetEntry: SheetMapEntry = new SheetMapEntryImpl();
    sheetMapSheetEntry.name = this.getSheetName(sheet);
    sheetMapSheetEntry.sheet = this.getSheetNameKey(sheet);
    sheetMap.sheets.push(sheetMapSheetEntry);
  }

  private persistSheetMap(sheetMap: SheetMap): void {
    localStorage.setItem(this.getSheetMapStorageKey(), JSON.stringify(sheetMap));
  }

  private getSheetMapper(): SheetMap {
    let sheetMap: string = localStorage.getItem(this.getSheetMapStorageKey());
    return JSON.parse(sheetMap);
  }

  public persistTheme(theme: string) {
    localStorage.setItem(this.getThemeStorageKey(), theme);
  }

  public getTheme(): Promise<string> {
    let theme: string = localStorage.getItem(this.getThemeStorageKey());

    if (theme) {
      return Promise.resolve(theme);
    } else {
      return Promise.reject('');
    }
  }

  public persistLanguage(locale: string): void {
    localStorage.setItem(this.getLanguageStorageKey(), locale);
  }

  public getLanguage(): Promise<string> {
    let locale: string = localStorage.getItem(this.getLanguageStorageKey());

    return Promise.resolve(locale);
  }

  public clearStorage(): void {
    this.clearStoredTheme();
    this.clearStoredLanguage();
  }

  private getThemeStorageKey(): string {
    return StorageService.STORAGE_KEY + StorageService.STORAGE_KEY_THEME;
  }

  private getLanguageStorageKey(): string {
    return StorageService.STORAGE_KEY + StorageService.STORAGE_KEY_LANGUAGE;
  }

  private getSheetMapStorageKey(): string {
    return StorageService.STORAGE_KEY + StorageService.STORAGE_KEY_SHEET;
  }

  private getSheetStorageKey(characterName: string): string {
    return StorageService.STORAGE_KEY + StorageService.STORAGE_KEY_SHEET + '.' + characterName;
  }

  private clearStoredTheme(): void {
    localStorage.removeItem(this.getThemeStorageKey());
    this.themeChange(null);
  }

  private clearStoredLanguage(): void {
    localStorage.removeItem(this.getLanguageStorageKey());
  }

  public sheetChange(sheet: string) {
    this.sheetChangeSource.next(sheet);
  }

  public themeChange(theme: string) {
    this.themeChangeSource.next(theme);
  }

  public languageChange(language: string) {
    this.languageChangeSource.next(language);
  }

  private initStorageListener() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getThemeStorageKey()) {
      this.themeChange(event.newValue);
    } else if (event.key === this.getLanguageStorageKey()) {
      this.languageChange(event.newValue);
    } else if (event.key.includes(this.getSheetStorageKey(''))) {
      this.sheetChange(event.newValue);
    }
  }
}


