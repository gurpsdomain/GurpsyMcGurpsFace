import {Injectable} from '@angular/core';
import {Settings} from '../../models/settings/settings.model';
import {TranslateService} from '@ngx-translate/core';
import {SettingsRepository} from '../../repositories/settings/settings.repository';
import {Subject} from 'rxjs/Subject';
import {Theme} from '../../models/settings/enums/theme.enum';

@Injectable()
export class SettingsService {

  private static ENGLISH = 'en';
  private static DEFAULT: string = SettingsService.ENGLISH;
  private static AVAILABLE_LANGUAGES: string[] = [SettingsService.ENGLISH];

  private settingsSource = new Subject<Settings>();
  public settingsChange$ = this.settingsSource.asObservable();

  constructor(private settingsStorageService: SettingsRepository,
              private translateService: TranslateService) {

    this.initObservable();
    this.initTranslateService();
  }

  /**
   * Set theme.
   *
   * @param theme : string
   */
  public setTheme(theme: Theme) {
    this.settingsStorageService.storeTheme(theme);
  }

  /**
   * Get theme.
   *
   * @return Promise<Theme>  A promise that resolves to the current theme
   */
  public getTheme(): Promise<Theme> {
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
