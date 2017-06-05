import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
// import {SettingsImpl, Settings} from '../../../../../models/settings/settings.model';
import {SheetBodyContent} from '../../../../front-end/sheet-body/sheet-body.service';
// import {Book} from '../../../../../models/book-configuration/book-model';
import {JsonConvert} from 'json2typescript';
import {Settings} from '../../../../../models/settings/settings.model';
import {Book} from '../../../../../models/settings/book.model';
import {logger} from 'codelyzer/util/logger';
import {LoggingService} from '../../../logging/logging.service';

@Injectable()
export class SettingsStorageDelegate {

  private static STORAGE_KEY = '.config';

  private subjectChangeSource = new Subject<Settings>();

  /**
   * Register to this observable to be notified when the value is changed
   * in Local Storage.
   *
   * @type {Observable<string>}
   */
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor(private loggingService: LoggingService) {
    window.addEventListener(StorageService.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Remove the Settings settings from Local Storage.
   *
   */
  public clear(): void {
    localStorage.removeItem(this.getStorageKey());
    this.change(null);
  }

  /**
   * Store the given BookConfigurations.
   *
   * @param {BookConfiguration[]}
   */
  public storeBookConfigurations(bookConfigurations: Book[]) {
    const config: Settings = this.retrieve();
    config.books = bookConfigurations;

    this.store(config);
  }

  /**
   * Store the given BookConfigurations.
   *
   * @param {SheetBodyContent} An enumeration that represents the sheet body content
   */
  public storeBodyContent(bodyContent: SheetBodyContent) {
    const config: Settings = this.retrieve();
    config.bodyContent = bodyContent;

    this.store(config);
  }

  /**
   * Store the given theme.
   *
   * @param {string} theme
   */
  public storeTheme(theme: string) {
    const config: Settings = this.retrieve();
    config.theme = theme;

    this.store(config);
  }

  /**
   * Store the given server URL.
   *
   * @param {string} server URL
   */
  public storeServerUrl(serverUrl: string) {
    const config: Settings = this.retrieve();
    config.serverUrl = serverUrl;
    this.store(config);
  }

  /**
   * Retrieve the currently stored theme.
   *
   * @returns {Promise<string>} the current theme.
   */
  public retrieveBodyContent(): Promise<SheetBodyContent> {
    const config: Settings = this.retrieve();

    if (!config.bodyContent) {
      return Promise.reject('No BodyContent stored, use default.');
    } else {
      return Promise.resolve(config.bodyContent);
    }
  }

  /**
   * Retrieve the currently stored BookConfigurations.
   *
   * @returns {Promise<BookConfiguration[]>} the current BookConfigurations.
   */
  public retrieveBookConfigurations(): Promise<Book[]> {
    const config: Settings = this.retrieve();

    if (!config.books) {
      return Promise.reject('No BookConfigurations stored.');
    } else {
      return Promise.resolve(config.books);
    }
  }

  /**
   * Retrieve the currently stored serverUrl.
   *
   * @returns {Promise<string>} the current serverUrl.
   */
  public retrieveServerUrl(): Promise<string> {
    const config: Settings = this.retrieve();

    if (config.serverUrl === '') {
      return Promise.reject('No serverUrl stored, use default.');
    } else {
      return Promise.resolve(config.serverUrl);
    }
  }

  /**
   * Retrieve the currently stored theme.
   *
   * @returns {Promise<string>} the current theme.
   */
  public retrieveTheme(): Promise<string> {
    const config: Settings = this.retrieve();

    if (config.theme === '') {
      return Promise.reject('No theme stored, use default.');
    } else {
      return Promise.resolve(config.theme);
    }
  }

  private store(settings: Settings) {
    const json = JsonConvert.serializeObject(settings);

    this.loggingService.info('Serialized settings object for Local Storage: ', json);
    localStorage.setItem(this.getStorageKey(), json);
    this.change(settings);
  }

  private retrieve(): Settings {
    const json: string = localStorage.getItem(this.getStorageKey());

    if (json) {
      const settings = JsonConvert.deserializeString(json, Settings);
      this.loggingService.info('Deserialized settings object from Local Storage: ', settings);
      return settings;
    } else {
      return new Settings();
    }
  }

  private change(config: Settings) {
    this.subjectChangeSource.next(config);
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + SettingsStorageDelegate.STORAGE_KEY;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getStorageKey()) {
      const settings = JsonConvert.deserializeString(event.newValue, Settings);
      this.change(settings);
    }
  }
}
