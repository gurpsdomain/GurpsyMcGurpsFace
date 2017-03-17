import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';

@Injectable()
export class ThemeStorageDelegate {

  private static STORAGE_KEY = '.theme';

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
   * Store the given theme in Local Storage.
   *
   * @param theme : String
   */
  public store(theme: string) {
    localStorage.setItem(this.getStorageKey(), theme);
  }

  /**
   * Retrieve the given theme from Locale Storage.
   *
   * @returns theme: Promise<String>
   */
  public retrieve(): Promise<string> {
    const theme: string = localStorage.getItem(this.getStorageKey());

    if (theme) {
      return Promise.resolve(theme);
    } else {
      return Promise.reject('WARNING - Theme unavailable');
    }
  }

  /**
   * Remove the Theme settings from Local Storage.
   *
   */
  public clear(): void {
    localStorage.removeItem(this.getStorageKey());
    this.change(null);
  }

  private change(theme: string) {
    this.subjectChangeSource.next(theme);
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + ThemeStorageDelegate.STORAGE_KEY;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getStorageKey()) {
      this.change(event.newValue);
    }
  }
}
