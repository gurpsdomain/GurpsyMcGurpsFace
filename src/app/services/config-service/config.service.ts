import {Injectable} from '@angular/core';
import {StorageService} from '../storage-service/storage.service';

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
   * Set Config.
   *
   * @param config : string
   */
  public setConfig(config: string) {
    this.storageService.storeConfig(config);
  }

  /**
   * Get Config.
   *
   * @return Promise<string>  A promise that resolves to the current config
   */
  public getConfig(): Promise<string> {
    return this.storageService.getConfig();
  }

  /**
   * Acquire the Observer on which you can register yourself to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<string>
   */
  public getConfigObserver() {
    return this.storageService.getConfigObserver();
  }
}
