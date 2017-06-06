import {Injectable} from '@angular/core';
import {StorageService} from '../../back-end/storage/storage.service';
import {Observable, Subject} from 'rxjs';
// import {Settings, SettingsImpl} from '../../../models/settings/settings.model';
import {SheetBodyContent} from '../sheet-body/sheet-body.service';
import {InputSheet} from '../../../models/sheet/input';
import {Book} from '../../../models/settings/book.model';
import {Settings} from '../../../models/settings/settings.model';


@Injectable()
export class SettingsService {

  public static THEME_DAY = 'day';
  public static THEME_NIGHT = 'night';
  public static THEME_DEFAULT = SettingsService.THEME_DAY;

  private storageService: StorageService;
  private settingsChangeSource = new Subject<Settings>();
  private settingsChange$ = this.settingsChangeSource.asObservable();

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
  public storeBookConfigurations(bookConfigurations: Book[]) {
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
   * @returns Promise<Book[]>
   */
  public getBookConfigurations(): Promise<Book[]> {
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
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<InputSheet[]> or an empty promise if there are no previously opened sheets.
   */
  public getPreviouslyOpenedSheets(): Promise<InputSheet[]> {
    return this.storageService.getPreviouslyOpenedSheets();
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
   * @type Observable<Settings>
   */
  public getSettingsObserver(): Observable<Settings> {
    return this.settingsChange$;
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
    this.storageService.getSettingsObserver().subscribe(settings => this.handleStorageSettingsChange(settings));
  }

  private handleStorageSettingsChange(settings: Settings): void {
    if (settings === null) {
      settings = new Settings();
    }
    this.settingsChangeSource.next(settings);
  }
}
