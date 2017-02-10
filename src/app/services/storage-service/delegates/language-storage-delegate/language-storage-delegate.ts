import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';

@Injectable()
export class LanguageStorageDelegate {

  private static STORAGE_KEY_LANGUAGE = '.language';

  private subjectChangeSource = new Subject<string>();
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor() {
    this.initStorageListener();
  }

  public storeLanguage(locale: string): void {
    localStorage.setItem(this.getLanguageStorageKey(), locale);
  }

  public getLanguage(): Promise<string> {
    let locale: string = localStorage.getItem(this.getLanguageStorageKey());

    return Promise.resolve(locale);
  }

  public change(theme: string) {
    this.subjectChangeSource.next(theme);
  }

  private getLanguageStorageKey(): string {
    return StorageService.STORAGE_KEY + LanguageStorageDelegate.STORAGE_KEY_LANGUAGE;
  }

  public clear(): void {
    localStorage.removeItem(this.getLanguageStorageKey());
  }

  private initStorageListener() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getLanguageStorageKey()) {
      this.change(event.newValue);
    }
  }
}

