import {Injectable} from '@angular/core';
import {StorageService} from '../storage-service/storage.service';
import {Observable} from 'rxjs';
import {Config} from '../../model/config/config';
import {SheetBodyContent} from '../sheet-body-service/sheet-body.service';

@Injectable()
export class ConfigService {

  public static THEME_DAY = 'day';
  public static THEME_NIGHT = 'night';
  public static THEME_DEFAULT = ConfigService.THEME_DAY;

  private storageService: StorageService;

  constructor(storage: StorageService) {
    this.storageService = storage;
  }

  /**
   * Set bodyContent.
   *
   * @param bodyContent : SheetBodyContent
   */
  public setbodyContent(bodyContent: SheetBodyContent) {
    this.storageService.storeBodyContent(bodyContent);
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
   * Get bodyContent.
   *
   * @return Promise<SheetBodyContent>  A promise that resolves to the current BodyContent
   */
  public getBodyContent(): Promise<SheetBodyContent> {
    return this.storageService.getBodyContent();
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
   * @type Observable<Config>
   */
  public getConfigObserver(): Observable<Config> {
    return this.storageService.getConfigObserver();
  }
}
