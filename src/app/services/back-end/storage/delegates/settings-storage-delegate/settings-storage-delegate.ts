import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {SheetBodyContent} from '../../../../front-end/sheet-body/sheet-body.service';
import {JsonConvert} from 'json2typescript';
import {Settings} from '../../../../../models/settings/settings.model';
import {Book} from '../../../../../models/settings/book.model';
import {LoggingService} from '../../../logging/logging.service';

@Injectable()
export class SettingsStorageDelegate {

  private static STORAGE_KEY = '.settings';

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
    const settings: Settings = this.retrieve();
    settings.books = bookConfigurations;

    this.store(settings);
  }

  /**
   * Store the given BookConfigurations.
   *
   * @param {SheetBodyContent} An enumeration that represents the sheet body content
   */
  public storeBodyContent(bodyContent: SheetBodyContent) {
    const settings: Settings = this.retrieve();
    settings.bodyContent = bodyContent;

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
   * Store the given server URL.
   *
   * @param {string} server URL
   */
  public storeServerUrl(serverUrl: string) {
    const settings: Settings = this.retrieve();
    settings.serverUrl = serverUrl;
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
   * Retrieve the currently stored BookConfigurations.
   *
   * @returns {Promise<BookConfiguration[]>} the current BookConfigurations.
   */
  public retrieveBookConfigurations(): Promise<Book[]> {
    const settings: Settings = this.retrieve();

    if (!settings.books) {
      return Promise.reject('No BookConfigurations stored.');
    } else {
      return Promise.resolve(settings.books);
    }
  }

  /**
   * Retrieve the currently stored serverUrl.
   *
   * @returns {Promise<string>} the current serverUrl.
   */
  public retrieveServerUrl(): Promise<string> {
    const settings: Settings = this.retrieve();

    if (settings.serverUrl === '') {
      return Promise.reject('No serverUrl stored, use default.');
    } else {
      return Promise.resolve(settings.serverUrl);
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

  private change(settings: Settings) {
    this.subjectChangeSource.next(settings);
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
