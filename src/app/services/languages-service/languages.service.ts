import {Injectable} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {StorageService} from '../storage-service/storage.service';
import {Subject} from 'rxjs';

@Injectable()
export class LanguagesService {

  public static ENGLISH = 'en';
  public static DUTCH = 'nl';
  public static DEFAULT: string = LanguagesService.ENGLISH;

  private static AVAILABLE_LANGUAGES: string[] = [LanguagesService.ENGLISH, LanguagesService.DUTCH];

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

  /**
   * Set language.
   *
   * @param locale : string
   */
  public setLanguage(locale: string): void {
    this.changeLanguage(locale);
    this.storeLanguage(locale);
  }

  /**
   * Get language.
   *
   * @return Promise<string>  A promise that resolves to the current locale
   */
  public getLanguage(): Promise<string> {
    return this.storageService.getLanguage();
  }

  private initTranslateService(): void {
    this.translateService.addLangs(LanguagesService.AVAILABLE_LANGUAGES);
    this.translateService.setDefaultLang(LanguagesService.DEFAULT);
    this.translateService.use(LanguagesService.DEFAULT);
  }

  private initStorageService(): void {
    this.getLanguage().then(storedLocale =>
      this.changeLanguage(storedLocale)
    ).catch(err => this.changeLanguage(LanguagesService.DEFAULT));

    this.storageService.getLanguageObserver().subscribe(locale => this.handleLanguageChange(locale));
  }

  private handleLanguageChange(locale: string): void {
    this.changeLanguage(locale);
    this.languageChangeSource.next(locale);
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

  private storeLanguage(locale: string): void {
    this.storageService.storeLanguage(locale);
  }
}
