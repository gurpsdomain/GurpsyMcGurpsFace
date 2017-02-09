import {Injectable} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {StorageService} from '../storage-service/storage.service';
import {Subject} from 'rxjs';

@Injectable()
export class LanguagesService {

  public static ENGLISH = 'en';
  public static DUTCH = 'nl';
  private static AVAILABLE_LANGUAGES: string[] = [LanguagesService.ENGLISH, LanguagesService.DUTCH];
  public static DEFAULT: string = LanguagesService.ENGLISH;

  private languageChangeSource = new Subject<string>();
  private translateService: TranslateService;
  private storageService: StorageService;

  public languageChange$ = this.languageChangeSource.asObservable();

  constructor(translate: TranslateService, storage: StorageService) {

    this.translateService = translate;
    this.storageService = storage;

    this.initTranslateService();
    this.initStorageService();
  }

  public setLanguage(locale: string): void {
    this.changeLanguage(locale);
    this.storeLanguage(locale);
  }


  private initTranslateService(): void {
    this.translateService.addLangs(LanguagesService.AVAILABLE_LANGUAGES);
    this.translateService.setDefaultLang(LanguagesService.DEFAULT);
    this.translateService.use(LanguagesService.DEFAULT);
  }

  private initStorageService(): void {
    this.getLanguage().then(storedLocale =>
      this.changeLanguage(storedLocale)
    )
    ;

    this.storageService.languageChange$.subscribe(locale => this.changeLanguage(locale));
    this.storageService.languageChange$.subscribe(locale => this.languageChangeSource.next(locale));
  }

  private changeLanguage(newLocale: string): void {
    let validLocale = false;
    for (let locale of LanguagesService.AVAILABLE_LANGUAGES) {
      if (locale === newLocale) {
        this.translateService.use(newLocale);
        validLocale = true;
        break;
      }
    }
    if (!validLocale) {
      this.translateService.use(LanguagesService.DEFAULT);
    }
  }

  public getLanguage(): Promise<string> {
    return this.storageService.getLanguage();
  }

  private storeLanguage(locale: string): void {
    this.storageService.persistLanguage(locale);
  }
}
