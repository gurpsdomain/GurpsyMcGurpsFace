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

    // this.initLanguage();
    this.initTranslateService();
  }

  // private initLanguage(): void {
  //   // this.storageService.themeChange$.subscribe(theme => this.themeChangeSource.next(theme));
  //
  //   this.storageService.getLanguage().then(locale => function () {
  //     for (let language of LanguagesService.AVAILABLE_LANGUAGES) {
  //       if (language === locale) {
  //         this.setLanguage(locale);
  //         break;
  //       }
  //     }
  //   }).catch(err => this.setLanguage(LanguagesService.DEFAULT));
  // }

  private initTranslateService(): void {
    this.translateService.addLangs(LanguagesService.AVAILABLE_LANGUAGES);
    this.translateService.setDefaultLang(LanguagesService.DEFAULT);
    this.translateService.use(LanguagesService.DEFAULT);
  }


  public setLanguage(locale: string): void {
    this.translateService.use(locale);
  }

  // public getLanguage(): Promise<string> {
  //   return this.storageService.getLanguage();
  // }

  // private storeLanguage(locale: string): void {
  //   this.storageService.setLanguage(locale);
  // }
}
