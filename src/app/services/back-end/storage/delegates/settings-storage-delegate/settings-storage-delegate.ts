import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {SettingsImpl, Settings} from '../../../../../models/settings/settings.model';
import {SheetBodyContent} from '../../../../front-end/sheet-body/sheet-body.service';
import {BookModel} from '../../../../../models/book-configuration/book-model';

@Injectable()
export class SettingsStorageDelegate {

  private static STORAGE_KEY = '.config';

  private subjectChangeSource = new Subject<Settings>();

  /**
   * Register to this observable to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<string>
   */
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor() {
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
   * @param BookConfiguration[]
   */
  public storeBookConfigurations(bookConfigurations: BookModel[]) {
    const config: Settings = this.retrieve();
    config.books = bookConfigurations;

    this.store(config);
  }

  /**
   * Store the given BookConfigurations.
   *
   * @param Array<Book
   */
  public storeBodyContent(bodyContent: SheetBodyContent) {
    const config: Settings = this.retrieve();
    config.bodyContent = bodyContent;

    this.store(config);
  }

  /**
   * Store the given theme.
   *
   * @param theme
   */
  public storeTheme(theme: string) {
    const config: Settings = this.retrieve();
    config.theme = theme;

    this.store(config);
  }

  /**
   * Store the given server URL.
   *
   * @param server URL
   */
  public storeServerUrl(serverUrl: string) {
    const config: Settings = this.retrieve();
    config.serverUrl = serverUrl;

    this.store(config);
  }

  /**
   * Retrieve the currently stored theme.
   *
   * @returns Promise<string> the current theme.
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
   * @returns Promise<BookConfiguration[]> the current BookConfigurations.
   */
  public retrieveBookConfigurations(): Promise<BookModel[]> {
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
   * @returns Promise<string> the current serverUrl.
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
   * @returns Promise<string> the current theme.
   */
  public retrieveTheme(): Promise<string> {
    const config: Settings = this.retrieve();

    if (config.theme === '') {
      return Promise.reject('No theme stored, use default.');
    } else {
      return Promise.resolve(config.theme);
    }
  }

  private store(config: Settings) {
    localStorage.setItem(this.getStorageKey(), JSON.stringify(config));
    this.change(config);
  }

  private retrieve(): Settings {
    const config: string = localStorage.getItem(this.getStorageKey());

    if (config) {
      return JSON.parse(config);
    } else {
      return new SettingsImpl();
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
      this.change(JSON.parse(event.newValue));
    }
  }
}
