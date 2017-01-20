import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class StorageService {

  private static STORAGE_KEY: string = 'gurpsy-mc-gurps-face';
  private static STORAGE_KEY_THEME: string = '.theme';
  private static STORAGE_KEY_LANGUAGE: string = '.language';


  private themeChangeSource = new Subject<string>();
  private languageChangeSource = new Subject<string>();

  public themeChange$ = this.themeChangeSource.asObservable();
  public languageChange$ = this.languageChangeSource.asObservable();

  constructor() {
    this.initStorageListener();
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

  private clearStoredTheme(): void {
    localStorage.removeItem(this.getThemeStorageKey());
    this.themeChange(null);
  }

  private clearStoredLanguage(): void {
    localStorage.removeItem(this.getLanguageStorageKey());
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
    switch (event.key) {
      case this.getThemeStorageKey():
        this.themeChange(event.newValue);
        break;
      case this.getLanguageStorageKey():
        this.languageChange(event.newValue);
        break;
    }
  }
}
