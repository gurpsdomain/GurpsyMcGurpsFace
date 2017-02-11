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

  public setTheme(theme: string) {
    this.storageService.storeTheme(theme);
  }

  public getTheme(): Promise<string> {
    return this.storageService.getTheme();
  }

  public getThemeObserver() {
    return this.storageService.getThemeObserver();
  }
}
