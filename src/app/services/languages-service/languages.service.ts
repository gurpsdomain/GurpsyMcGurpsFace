import {Injectable} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {StorageService} from '../storage-service/storage.service';

@Injectable()
export class LanguagesService {

  private static ENGLISH: string = 'en';
  private static DUTCH: string = 'nl';
  private static AVAILABLE_LANGUAGES: string[] = [LanguagesService.ENGLISH, LanguagesService.DUTCH];
  public static DEFAULT: string = LanguagesService.ENGLISH;

  private translateService: TranslateService;
  private storageService: StorageService;

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
    this.storageService.getLanguage().then(storedLocale => function () {
      this.changeLanguage(storedLocale);
    });

    this.storageService.languageChange$.subscribe(locale => this.changeLanguage(locale));
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

  // public getLanguage(): Promise<string> {
  //   return this.storageService.getLanguage();
  // }

  private storeLanguage(locale: string): void {
    this.storageService.setLanguage(locale);
  }
}
