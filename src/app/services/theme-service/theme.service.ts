import {Injectable} from '@angular/core';
import {StorageService} from '../storage-service/storage.service';

@Injectable()
export class ThemeService {

  public static THEME_DAY = 'day';
  public static THEME_NIGHT = 'night';
  public static DEFAULT = ThemeService.THEME_DAY;

  private storageService: StorageService;

  constructor(storage: StorageService) {
    this.storageService = storage;
  }

  /**
   * Set theme.
   *
   * @param theme : string
   */
  public setTheme(theme: string) {
    this.storageService.storeTheme(theme);
  }

  /**
   * Get theme.
   *
   * @return Promise<string>  A promise that resolves to the current theme
   */
  public getTheme(): Promise<string> {
    return this.storageService.getTheme();
  }

  /**
   * Acquire the Observer on which you can register yourself to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<string>
   */
  public getThemeObserver() {
    return this.storageService.getThemeObserver();
  }
}
