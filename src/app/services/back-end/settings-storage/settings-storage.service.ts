import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SheetBodyContent} from '../../front-end/sheet-body/sheet-body.service';
import {JsonConvert} from 'json2typescript';
import {Settings} from '../../../models/settings/settings.model';
import {LoggingService} from '../logging/logging.service';
import {GurpsyConstants} from '../../../gurpsy.constants';

@Injectable()
export class SettingsStorageService {


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
    window.addEventListener(GurpsyConstants.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
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
   * Store the given BodyContent.
   *
   * @param {SheetBodyContent} An enumeration that represents the template body content
   */
  public storeBodyContent(bodyContent: SheetBodyContent) {
    const settings: Settings = this.retrieve();
    settings.bodyContent = bodyContent;

    this.store(settings);
  }

  /**
   * Store the given metrics.
   *
   * @param {string} metrics
   */
  public storeMetrics(metrics: string) {
    const settings: Settings = this.retrieve();
    settings.metrics = metrics;

    this.store(settings);
  }

  /**
   * Store the given theme.
   *
   * @param {string} theme
   */
  public storeTheme(theme: string) {
    const settings: Settings = this.retrieve();
    settings.theme = theme;

    this.store(settings);
  }

  /**
   * Retrieve the currently stored theme.
   *
   * @returns {Promise<string>} the current theme.
   */
  public retrieveBodyContent(): Promise<SheetBodyContent> {
    const settings: Settings = this.retrieve();

    if (!settings.bodyContent) {
      return Promise.reject('No BodyContent stored, use default.');
    } else {
      return Promise.resolve(settings.bodyContent);
    }
  }

  /**
   * Retrieve the currently stored metrics.
   *
   * @returns {Promise<string>} the current metrics.
   */
  public retrieveMetrics(): Promise<string> {
    const settings: Settings = this.retrieve();

    if (settings.metrics === '') {
      return Promise.reject('No metrics stored, use default.');
    } else {
      return Promise.resolve(settings.metrics);
    }
  }

  /**
   * Retrieve the currently stored theme.
   *
   * @returns {Promise<string>} the current theme.
   */
  public retrieveTheme(): Promise<string> {
    const settings: Settings = this.retrieve();

    if (settings.theme === '') {
      return Promise.reject('No theme stored, use default.');
    } else {
      return Promise.resolve(settings.theme);
    }
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
    return GurpsyConstants.GURPSY_STORAGE_KEY + SettingsStorageService.STORAGE_KEY;
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
      this.loggingService.error('Unable to retrieve Settings from Local Storage. Using default.', ex)
    }

    return settings;
  }
}
