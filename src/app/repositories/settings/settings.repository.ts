import {Injectable} from '@angular/core';
import {JsonConvert} from 'json2typescript';
import {Settings} from '../../models/settings/settings.model';
import {LoggingService} from '../../services/logging/logging.service';
import {GurpsyConstants} from '../../gurpsy.constants';
import {Subject} from 'rxjs/Subject';
import {Theme} from '../../models/settings/enums/theme.enum';

@Injectable()
export class SettingsRepository {

  private static STORAGE_KEY = '.settings';

  private settingsChanged = new Subject<Settings>();

  /**
   * Register to this observable to be notified when the value is changed
   * in Local Storage.
   *
   * @type {Observable<Settings>}
   */
  public settingsChanged$ = this.settingsChanged.asObservable();

  constructor(private loggingService: LoggingService) {
    window.addEventListener(GurpsyConstants.STORAGE_EVENT_LISTENER_KEY,
      (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Remove the Settings settings from Local Storage.
   *
   */
  public clear(): void {
    localStorage.removeItem(this.getStorageKey());
    this.settingsChanged.next(null);
  }


  /**
   * Store the given theme.
   *
   * @param {Theme} theme
   */
  public storeTheme(theme: Theme) {
    const settings: Settings = this.retrieve();
    settings.theme = theme;

    this.store(settings);
  }

  /**
   * Retrieve the currently stored theme.
   *
   * @returns {Promise<Theme>} the current theme.
   */
  public retrieveTheme(): Promise<Theme> {
    const settings: Settings = this.retrieve();

    return Promise.resolve(settings.theme);
  }

  private store(settings: Settings) {

    const jsonConvert = new JsonConvert();
    const json = JSON.stringify(jsonConvert.serialize(settings));

    localStorage.setItem(this.getStorageKey(), json);
    this.settingsChanged.next(settings);
  }

  private retrieve(): Settings {
    const json: string = localStorage.getItem(this.getStorageKey());

    let settings: Settings = new Settings();

    if (json) {
      settings = this.deserialize(json);
    }

    return settings;
  }

  private getStorageKey(): string {
    return GurpsyConstants.GURPSY_STORAGE_KEY + SettingsRepository.STORAGE_KEY;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getStorageKey()) {
      const settings = this.deserialize(event.newValue);
      this.settingsChanged.next(settings);
    }
  }

  private deserialize(json): Settings {
    let settings: Settings = new Settings();

    try {
      const jsonConvert = new JsonConvert();
      settings = jsonConvert.deserialize(JSON.parse(json), Settings);
    } catch (ex) {
      this.loggingService.error('Unable to retrieve Settings from Local Storage. Using default.', ex);
    }

    return settings;
  }
}
