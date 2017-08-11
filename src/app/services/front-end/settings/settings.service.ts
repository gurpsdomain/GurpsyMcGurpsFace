import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SheetBodyContent} from '../sheet-body/sheet-body.service';
import {Book} from '../../../models/settings/book.model';
import {Settings} from '../../../models/settings/settings.model';
import {TranslateService} from '@ngx-translate/core';
import {SettingsStorageService} from '../../back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../back-end/template-storage/template-storage.service';


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

  constructor(private settingsStorageService: SettingsStorageService,
              private templateStorageService: TemplateStorageService,
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
    this.settingsStorageService.storeBodyContent(bodyContent);
  }

  /**
   * Set metrics.
   *
   * @param metrics : string
   */
  public setMetrics(metrics: string) {
    this.settingsStorageService.storeMetrics(metrics);
  }

  /**
   * Set BookConfigurations;
   *
   * @param BookConfiguration[]
   */
  public storeBookConfigurations(bookConfigurations: Book[]) {
    this.settingsStorageService.storeBookConfigurations(bookConfigurations);
  }

  /**
   * Set theme.
   *
   * @param theme : string
   */
  public setTheme(theme: string) {
    this.settingsStorageService.storeTheme(theme);
  }

  /**
   * Get bodyContent.
   *
   * @return Promise<SheetBodyContent>  A promise that resolves to the current BodyContent
   */
  public getBodyContent(): Promise<SheetBodyContent> {
    return this.settingsStorageService.retrieveBodyContent();
  }

  /**
   * Retrieve the given BookConfigurations from Locale Storage.
   *
   * @returns Promise<Book[]>
   */
  public getBookConfigurations(): Promise<Book[]> {
    return this.settingsStorageService.retrieveBookConfigurations();
  }

  /**
   * Get metrics.
   *
   * @return Promise<string>  A promise that resolves to the current metrics
   */
  public getMetrics(): Promise<string> {
    return this.settingsStorageService.retrieveMetrics();
  }


  /**
   * Get theme.
   *
   * @return Promise<string>  A promise that resolves to the current theme
   */
  public getTheme(): Promise<string> {
    return this.settingsStorageService.retrieveTheme();
  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public clearStorage(): void {
    this.settingsStorageService.clear();
    this.templateStorageService.clear();
  }

  private initTranslateService(): void {
    this.translateService.addLangs(SettingsService.AVAILABLE_LANGUAGES);
    this.translateService.setDefaultLang(SettingsService.DEFAULT);
    this.translateService.use(SettingsService.DEFAULT);
  }

  private initObservable(): void {
    this.settingsStorageService.settingsChanged$.subscribe(settings => this.notifyListeners(settings));
  }

  private notifyListeners(settings: Settings): void {
    if (!settings) {
      settings = new Settings();
    }
    this.settingsSource.next(settings);
  }
}
