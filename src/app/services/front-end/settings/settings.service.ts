import {Injectable} from '@angular/core';
import {StorageService} from '../../back-end/storage/storage.service';
import {Observable, Subject} from 'rxjs';
import {Config, ConfigImpl} from '../../../models/config/config';
import {SheetBodyContent} from '../sheet-body/sheet-body.service';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';

@Injectable()
export class SettingsService {

  public static THEME_DAY = 'day';
  public static THEME_NIGHT = 'night';
  public static THEME_DEFAULT = SettingsService.THEME_DAY;

  private storageService: StorageService;
  private configChangeSource = new Subject<Config>();
  private configChange$ = this.configChangeSource.asObservable();

  constructor(storage: StorageService) {
    this.storageService = storage;
    this.initStorageChangeListener();
  }

  /**
   * Set bodyContent.
   *
   * @param bodyContent : SheetBodyContent
   */
  public setBodyContent(bodyContent: SheetBodyContent) {
    this.storageService.storeBodyContent(bodyContent);
  }

  /**
   * Set BookConfigurations;
   *
   * @param BookConfiguration[]
   */
  public storeBookConfigurations(bookConfigurations: BookConfiguration[]) {
    this.storageService.storeBookConfigurations(bookConfigurations);
  }

  /**
   * Set serverUrl.
   *
   * @param serverUrl : string
   */
  public setServerUrl(serverUrl: string) {
    this.storageService.storeServerUrl(serverUrl);
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
   * Retrieve the given BookConfigurations from Locale Storage.
   *
   * @returns Promise<BookConfiguration[]>
   */
  public getBookConfigurations(): Promise<BookConfiguration[]> {
    return this.storageService.getBookConfigurations();
  }

  /**
   * Get serverUrl.
   *
   * @return Promise<string>  A promise that resolves to the current serverUrl
   */
  public getServerUrl(): Promise<string> {
    return this.storageService.getServerUrl();
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
   * Get the value of the night theme.
   *
   * @return Promise<string>  A promise that resolves to the night theme
   */
  public getNightTheme(): Promise<string> {
    return Promise.resolve(SettingsService.THEME_NIGHT);
  }

  /**
   * Acquire the Observer on which you can register yourself to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<Config>
   */
  public getConfigObserver(): Observable<Config> {
    return this.configChange$;
  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public kill(): void {
    this.storageService.kill();
    this.storageService.kill();

  }

  private initStorageChangeListener(): void {
    this.storageService.getConfigObserver().subscribe(config => this.handleStorageConfigChange(config));
  }

  private handleStorageConfigChange(newConfig: Config): void {
    let config = newConfig;

    if (config === null) {
      config = new ConfigImpl();
    }
    this.configChangeSource.next(config);
  }
}
