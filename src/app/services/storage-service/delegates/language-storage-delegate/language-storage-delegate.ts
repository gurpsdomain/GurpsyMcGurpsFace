import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';

@Injectable()
export class LanguageStorageDelegate {

  private static STORAGE_KEY = '.language';

  private subjectChangeSource = new Subject<string>();

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
   * Store the given locale in Local Storage.
   *
   * @param locale : String
   */
  public store(locale: string): void {
    localStorage.setItem(this.getStorageKey(), locale);
  }

  /**
   * Retrieve the given locale from Locale Storage.
   *
   * @returns locale: Promise<String>
   */
  public retrieve(): Promise<string> {
    let locale: string = localStorage.getItem(this.getStorageKey());

    if (locale) {
      return Promise.resolve(locale);
    } else {
      return Promise.reject('WARNING - Locale unavailable');
    }
  }

  /**
   * Remove the Language settings from Local Storage.
   *
   */
  public clear(): void {
    localStorage.removeItem(this.getStorageKey());
  }

  private change(theme: string) {
    this.subjectChangeSource.next(theme);
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + LanguageStorageDelegate.STORAGE_KEY;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getStorageKey()) {
      this.change(event.newValue);
    }
  }
}

