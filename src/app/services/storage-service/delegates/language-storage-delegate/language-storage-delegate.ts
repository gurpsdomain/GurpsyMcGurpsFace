import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';

@Injectable()
export class LanguageStorageDelegate {

  private static STORAGE_KEY = '.language';

  private subjectChangeSource = new Subject<string>();
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  public store(locale: string): void {
    localStorage.setItem(this.getStorageKey(), locale);
  }

  public retrieve(): Promise<string> {
    let locale: string = localStorage.getItem(this.getStorageKey());

    if (locale) {
      return Promise.resolve(locale);
    } else {
      return Promise.reject('WARNING - Locale unavailable');
    }
  }

  private change(theme: string) {
    this.subjectChangeSource.next(theme);
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + LanguageStorageDelegate.STORAGE_KEY;
  }

  public clear(): void {
    localStorage.removeItem(this.getStorageKey());
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getStorageKey()) {
      this.change(event.newValue);
    }
  }
}

