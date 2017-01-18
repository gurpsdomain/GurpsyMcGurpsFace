import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ConfigurationService} from '../configuration-service/configuration.service';

@Injectable()
export class StorageService {

  public static THEME_DAY: string = 'day';
  public static THEME_DEFAULT: string = StorageService.THEME_DAY;

  private static STORAGE_KEY_THEME: string = '.theme';
  private static STORAGE_KEY_LANGUAGE: string = '.language';

  private configurationService: ConfigurationService;

  private themeChangeSource = new Subject<string>();
  private languageChangeSource = new Subject<string>();

  public themeChange$ = this.themeChangeSource.asObservable();
  public languageChange$ = this.languageChangeSource.asObservable();

  constructor(configuration: ConfigurationService) {
    this.configurationService = configuration;

    this.initStorageListener();
  }

  public getDefaultTheme(): Promise<string> {
    return Promise.resolve(StorageService.THEME_DEFAULT);
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

  public clearStorage(): void {
    this.clearStoredTheme();
    this.clearStoredLanguage();
  }

  private getThemeStorageKey(): string {
    return this.configurationService.getStorageKey() + StorageService.STORAGE_KEY_THEME;
  }

  private getLanguageStorageKey(): string {
    return this.configurationService.getStorageKey() + StorageService.STORAGE_KEY_LANGUAGE;
  }

  private clearStoredTheme(): void {
    localStorage.removeItem(this.getThemeStorageKey());
    this.themeChange(StorageService.THEME_DEFAULT);
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
