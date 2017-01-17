import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ConfigurationService} from '../configuration-service/configuration.service';

@Injectable()
export class StorageService {

  private static THEME_STORAGE_KEY: string = '.theme';
  private static THEME_DAY: string = 'day';
  private static THEME_NIGHT: string = 'night';
  private static THEME_DEFAULT: string = StorageService.THEME_DAY;

  private configurationService: ConfigurationService;

  private themeChangeSource = new Subject<string>();
  private languageChangeSource = new Subject<string>();

  themeChange$ = this.themeChangeSource.asObservable();
  languageChange$ = this.languageChangeSource.asObservable();

  constructor(configuration: ConfigurationService) {
    this.configurationService = configuration;

    this.initStorageListener();
  }

  private initStorageListener() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  public getThemeStorageKey(): string {
    return this.configurationService.getStorageKey() + StorageService.THEME_STORAGE_KEY;
  }

  public getDefaultTheme(): Promise<string> {
    return Promise.resolve(StorageService.THEME_DEFAULT);
  }

  public setTheme(isDark: boolean) {
    let theme: string = isDark ? StorageService.THEME_NIGHT : StorageService.THEME_DAY;
    localStorage.setItem(this.getThemeStorageKey(), theme);
  }

  public getTheme(): Promise<string> {
    let theme: string = localStorage.getItem(this.getThemeStorageKey());

    if (theme) {
      return Promise.resolve(theme);
    } else {
      return this.getDefaultTheme();
    }
  }

  // Service message commands
  public themeChange(theme: string) {
    this.themeChangeSource.next(theme);
  }

  public languageChange(language: string) {
    this.languageChangeSource.next(language);
  }

  private handleStorageChange(event: StorageEvent): void {
    switch (event.key) {
      case this.getThemeStorageKey():
        this.themeChange(event.newValue);
        break;
    }
  }
}
