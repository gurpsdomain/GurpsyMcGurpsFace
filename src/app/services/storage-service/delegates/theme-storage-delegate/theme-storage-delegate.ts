import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';

@Injectable()
export class ThemeStorageDelegate {

  private static STORAGE_KEY = '.theme';

  private subjectChangeSource = new Subject<string>();
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  public store(theme: string) {
    localStorage.setItem(this.getStorageKey(), theme);
  }

  public retrieve(): Promise<string> {
    let theme: string = localStorage.getItem(this.getStorageKey());

    if (theme) {
      return Promise.resolve(theme);
    } else {
      return Promise.reject('WARNING - Theme unavailable');
    }
  }

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
