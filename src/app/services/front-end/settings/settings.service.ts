import {Injectable} from '@angular/core';
import {StorageService} from '../../back-end/storage/storage.service';
import {Subject} from 'rxjs';
import {SheetBodyContent} from '../sheet-body/sheet-body.service';
import {Book} from '../../../models/settings/book.model';
import {Settings} from '../../../models/settings/settings.model';
import {UpdateSheet} from '../../../models/sheet/update/update-sheet.model';
import {TranslateService} from '@ngx-translate/core';


@Injectable()
export class SettingsService {

  private static ENGLISH = 'en';
  private static DEFAULT: string = SettingsService.ENGLISH;
  private static AVAILABLE_LANGUAGES: string[] = [SettingsService.ENGLISH];

  public static THEME_DAY = 'day';
  public static THEME_NIGHT = 'night';
  public static THEME_DEFAULT = SettingsService.THEME_DAY;

  public static METRICS_SI = 'si';
  public static METRICS_DEFAULT = 'default';

  private settingsSource = new Subject<Settings>();
  public settingsChange$ = this.settingsSource.asObservable();

  constructor(private storageService: StorageService,
              private translateService: TranslateService) {

    this.initObservable();
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
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public clearStorage(): void {
    this.storageService.clearStorage();
  }

  private initTranslateService(): void {
    this.translateService.addLangs(SettingsService.AVAILABLE_LANGUAGES);
    this.translateService.setDefaultLang(SettingsService.DEFAULT);
    this.translateService.use(SettingsService.DEFAULT);
  }

  private initObservable(): void {
    this.storageService.getSettingsObserver().subscribe(settings => this.notifyListeners(settings));
  }

  private notifyListeners(settings: Settings): void {
    if (!settings) {
      settings = new Settings();
    }
    this.settingsSource.next(settings);
  }
}
