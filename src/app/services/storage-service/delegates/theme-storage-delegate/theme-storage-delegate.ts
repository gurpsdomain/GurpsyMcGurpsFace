import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';

@Injectable()
export class ThemeStorageDelegate {

  private static STORAGE_KEY_THEME = '.theme';

  private subjectChangeSource = new Subject<string>();
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor() {
    this.initStorageListener();
  }

  private initStorageListener() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  public change(theme: string) {
    this.subjectChangeSource.next(theme);
  }

  public persistTheme(theme: string) {
    localStorage.setItem(this.getThemeStorageKey(), theme);
  }

  public getTheme(): Promise<string> {
    let theme: string = localStorage.getItem(this.getThemeStorageKey());

    if (theme) {
      return Promise.resolve(theme);
    } else {
      return Promise.reject('');
    }
  }

  public clear(): void {
    localStorage.removeItem(this.getThemeStorageKey());
    this.change(null);
  }

  private getThemeStorageKey(): string {
    return StorageService.STORAGE_KEY + ThemeStorageDelegate.STORAGE_KEY_THEME;
  }
  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getThemeStorageKey()) {
      this.change(event.newValue);
    }
  }

}
