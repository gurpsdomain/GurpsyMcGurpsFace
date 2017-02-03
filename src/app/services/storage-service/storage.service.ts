import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

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

  public setSheet(sheet: string, characterName: string) {
    localStorage.setItem(this.getSheetStorageKey(characterName), sheet);
  }

  public getSheet(characterName: string): Promise<string> {
    let sheet: string = localStorage.getItem(this.getSheetStorageKey(characterName));

    if (sheet) {
      return Promise.resolve(sheet);
    } else {
      return Promise.reject('');
    }
  }

  public setTheme(theme: string) {
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

  public setLanguage(locale: string): void {
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
