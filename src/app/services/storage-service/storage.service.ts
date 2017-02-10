import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {SheetMap, SheetMapEntry} from '../../model/json/sheetmap';
import {SheetMapImpl, SheetMapEntryImpl} from '../../model/json/sheetmap-impl';
import {Sheet} from '../../model/sheet/sheet';
import {ThemeStorageDelegate} from './delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from './delegates/language-storage-delegate/language-storage-delegate';

@Injectable()
export class StorageService {

  public static STORAGE_KEY = 'gurpsy-mc-gurps-face';
  private static STORAGE_KEY_SHEET = '.sheet';

  private themeStorageDelegate: ThemeStorageDelegate;
  private languageStorageDelegate: LanguageStorageDelegate;

  private sheetChangeSource = new Subject<string>();

  public sheetChange$ = this.sheetChangeSource.asObservable();

  constructor(themeStorageDelegate: ThemeStorageDelegate, languageStorageDelegate: LanguageStorageDelegate) {
    this.themeStorageDelegate = themeStorageDelegate;
    this.languageStorageDelegate = languageStorageDelegate;

    this.initStorageListener();
  }

  public getLanguageObserver() {
    return this.languageStorageDelegate.valueChange$;
  }

  public getThemeObserver() {
    return this.themeStorageDelegate.valueChange$;
  }

  public storeLanguage(locale: string): void {
    this.languageStorageDelegate.storeLanguage(locale);
  }

  public storeTheme(theme: string) {
    this.themeStorageDelegate.persistTheme(theme);
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

  public storeSheet(sheet: Sheet): void {
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
    let sheetMap: SheetMap = this.getSheetMap();

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
    let sheetMap: SheetMap = this.getSheetMap();

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

  private getSheetMap(): SheetMap {
    let sheetMap: string = localStorage.getItem(this.getSheetMapStorageKey());
    return JSON.parse(sheetMap);
  }


  private getSheetMapStorageKey(): string {
    return StorageService.STORAGE_KEY + StorageService.STORAGE_KEY_SHEET;
  }

  private getSheetStorageKey(characterName: string): string {
    return StorageService.STORAGE_KEY + StorageService.STORAGE_KEY_SHEET + '.' + characterName;
  }


  public sheetChange(sheet: string) {
    this.sheetChangeSource.next(sheet);
  }

  private initStorageListener() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key.includes(this.getSheetStorageKey(''))) {
      this.sheetChange(event.newValue);
    }
  }
}


