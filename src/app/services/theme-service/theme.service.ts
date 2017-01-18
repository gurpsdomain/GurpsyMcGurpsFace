import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {StorageService} from '../storage-service/storage.service';

@Injectable()
export class ThemeService {

  public static THEME_DAY: string = 'day';
  public static THEME_NIGHT: string = 'night';
  public static THEME_DEFAULT: string = StorageService.THEME_DAY;

  private themeChangeSource = new Subject<string>();
  private storageService: StorageService;

  public themeChange$ = this.themeChangeSource.asObservable();

  constructor(storage: StorageService) {
    this.storageService = storage;
    this.storageService.themeChange$.subscribe(theme => this.themeChangeSource.next(theme));
  }

  public setTheme(theme: string) {
    this.storageService.setTheme(theme);
  }

  public getTheme(): Promise<string> {
    return this.storageService.getTheme();
  }
}
