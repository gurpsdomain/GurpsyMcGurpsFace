import {Injectable} from '@angular/core';
import {StorageService} from '../../back-end/storage/storage.service';
import {Observable} from 'rxjs';
import {SheetBodyContent} from '../sheet-body/sheet-body.service';
import {Book} from '../../../models/settings/book.model';
import {Settings} from '../../../models/settings/settings.model';
import {UpdateSheet} from '../../../models/sheet/update/update-sheet.model';
import {TranslateService} from '@ngx-translate/core';


@Injectable()
export class SettingsService {

  public static THEME_DAY = 'day';
  public static THEME_NIGHT = 'night';
  public static THEME_DEFAULT = SettingsService.THEME_DAY;

  public static METRICS_SI = 'si';
  public static METRICS_DEFAULT = 'default';

  private static ENGLISH = 'en';
  private static DEFAULT: string = SettingsService.ENGLISH;
  private static AVAILABLE_LANGUAGES: string[] = [SettingsService.ENGLISH];

  constructor(private storageService: StorageService,
              private translateService: TranslateService) {

    this.initTranslateService();
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
   * Set metrics.
   *
   * @param metrics : string
   */
  public setMetrics(metrics: string) {
    this.storageService.storeMetrics(metrics);
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
   * Get metrics.
   *
   * @return Promise<string>  A promise that resolves to the current metrics
   */
  public getMetrics(): Promise<string> {
    return this.storageService.getMetrics();
  }

  /**
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<UpdateSheet[]> or an empty promise if there are no previously opened sheets.
   */
  public getPreviouslyOpenedSheets(): Promise<UpdateSheet[]> {
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
   * Acquire the Observer on which you can register yourself to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<Settings>
   */
  public getSettingsObserver(): Observable<Settings> {
    return this.storageService.getSettingsObserver();
  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public kill(): void {
    this.storageService.clearStorage();
    this.storageService.clearStorage();
  }

  private initTranslateService(): void {
    this.translateService.addLangs(SettingsService.AVAILABLE_LANGUAGES);
    this.translateService.setDefaultLang(SettingsService.DEFAULT);
    this.translateService.use(SettingsService.DEFAULT);
  }
}
