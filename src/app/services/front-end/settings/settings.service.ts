import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Settings} from '../../../models/settings/settings.model';
import {TranslateService} from '@ngx-translate/core';
import {SettingsStorageService} from '../../back-end/settings-storage/settings-storage.service';


@Injectable()
export class SettingsService {

  private static ENGLISH = 'en';
  private static DEFAULT: string = SettingsService.ENGLISH;
  private static AVAILABLE_LANGUAGES: string[] = [SettingsService.ENGLISH];

  public static THEME_DAY = 'day';
  public static THEME_NIGHT = 'night';
  public static THEME_DEFAULT = SettingsService.THEME_NIGHT;

  public static METRICS_SI = 'si';
  public static METRICS_DEFAULT = 'default';

  private settingsSource = new Subject<Settings>();
  public settingsChange$ = this.settingsSource.asObservable();

  constructor(private settingsStorageService: SettingsStorageService,
              private translateService: TranslateService) {

    this.initObservable();
    this.initTranslateService();
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
   * Set theme.
   *
   * @param theme : string
   */
  public setTheme(theme: string) {
    this.settingsStorageService.storeTheme(theme);
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
