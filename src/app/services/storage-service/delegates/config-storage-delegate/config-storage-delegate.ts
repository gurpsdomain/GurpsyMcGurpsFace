import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {ConfigImpl, Config} from '../../../../models/config/config';
import {JsonService} from '../../../json-service/json.service';
import {SheetBodyContent} from '../../../sheet-body-service/sheet-body.service';

@Injectable()
export class ConfigStorageDelegate {

  private static STORAGE_KEY = '.config';

  private subjectChangeSource = new Subject<Config>();
  private jsonService: JsonService;

  /**
   * Register to this observable to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<string>
   */
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor(jsonService: JsonService) {
    this.jsonService = jsonService;

    window.addEventListener(StorageService.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Remove the Config settings from Local Storage.
   *
   */
  public clear(): void {
    localStorage.removeItem(this.getStorageKey());
    this.change(null);
  }

  /**
   * Store the given BodyContent.
   *
   * @param BodyContent
   */
  public storeBodyContent(bodyContent: SheetBodyContent) {
    const config: Config = this.retrieve();
    config.bodyContent = bodyContent;

    this.store(config);
  }

  /**
   * Store the given theme.
   *
   * @param theme
   */
  public storeTheme(theme: string) {
    const config: Config = this.retrieve();
    config.theme = theme;

    this.store(config);
  }

  /**
   * Store the given server URL.
   *
   * @param server URL
   */
  public storeServerUrl(serverUrl: string) {
    const config: Config = this.retrieve();
    config.serverUrl = serverUrl;

    this.store(config);
  }

  /**
   * Retrieve the currently stored theme.
   *
   * @returns Promise<string> the current theme.
   */
  public retrieveBodyContent(): Promise<SheetBodyContent> {
    const config: Config = this.retrieve();

    if (!config.bodyContent) {
      return Promise.reject('No BodyContent stored, use default.');
    } else {
      return Promise.resolve(config.bodyContent);
    }
  }

  /**
   * Retrieve the currently stored serverUrl.
   *
   * @returns Promise<string> the current serverUrl.
   */
  public retrieveServerUrl(): Promise<string> {
    const config: Config = this.retrieve();

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
    const config: Config = this.retrieve();

    if (config.theme === '') {
      return Promise.reject('No theme stored, use default.');
    } else {
      return Promise.resolve(config.theme);
    }
  }

  private store(config: Config) {
    localStorage.setItem(this.getStorageKey(), JSON.stringify(config));
  }

  private retrieve(): Config {
    const config: string = localStorage.getItem(this.getStorageKey());

    if (config) {
      return this.jsonService.parseJsonConfig(config);
    } else {
      return new ConfigImpl();
    }
  }

  private change(config: Config) {
    this.subjectChangeSource.next(config);
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + ConfigStorageDelegate.STORAGE_KEY;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getStorageKey()) {
      this.change(this.jsonService.parseJsonConfig(event.newValue));
    }
  }
}
