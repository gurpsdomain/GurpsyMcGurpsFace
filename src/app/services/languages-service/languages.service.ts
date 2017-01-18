import {Injectable} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {Language} from '../../models/language';
import {ConfigurationService} from '../configuration-service/configuration.service';
import {StorageService} from '../storage-service/storage.service';

@Injectable()
export class LanguagesService {

    private static STORAGE_KEY: string = '.language';
    private static ENGLISH: Language = new Language('en');
    private static DUTCH: Language = new Language('nl');
    private static AVAILABLE_LANGUAGES: Language[] = [LanguagesService.ENGLISH, LanguagesService.DUTCH];
    private static DEFAULT: Language = LanguagesService.ENGLISH;

    private translateService: TranslateService;
    private configurationService: ConfigurationService;
    private storageService: StorageService;
    private current: Language;

    constructor(translate: TranslateService, configuration: ConfigurationService, storage: StorageService) {

        this.translateService = translate;
        this.configurationService = configuration;
        this.storageService = storage;

        let storedLanguageName: string = localStorage.getItem(this.getStorageKey());

        if (storedLanguageName) {
            for (let language of LanguagesService.AVAILABLE_LANGUAGES) {
                if (language.locale === storedLanguageName) {
                    this.current = language;
                    break;
                }
            }
        }

        if (!this.current) {
            this.current = LanguagesService.DEFAULT;
        }
    }

    public getDefault(): Promise<Language> {
        return Promise.resolve(LanguagesService.DEFAULT);
    }

    public getCurrent(): Promise<Language> {
        return Promise.resolve(this.getDefault());
    }

    public setCurrent(language: Language): void {
        this.changeLanguage(language);
    }

    public getCurrentLocale(): Promise<string> {
        return Promise.resolve(this.current.locale);
    }

    public getDefaultLocale(): Promise<string> {
        let locale: string = LanguagesService.DEFAULT.locale;
        return Promise.resolve(locale);
    }

    public getAvailableLanguages(): Promise<Language[]> {
        return Promise.resolve(LanguagesService.AVAILABLE_LANGUAGES);
    }

    public getAvailableLanguagesLocales(): Promise<string[]> {

        let languagesLocales: string[] = [];
        for (let language of LanguagesService.AVAILABLE_LANGUAGES) {
            languagesLocales.push(language.locale);
        }
        return Promise.resolve(languagesLocales);
    }

    public getStorageKey(): string {
      return this.configurationService.getStorageKey() + LanguagesService.STORAGE_KEY;
    }

    // private setDefaultLanguage(): void {
    //   this.changeLanguage(LanguagesService.DEFAULT);
    // }

    private changeLanguage(language: Language): void {
        this.persistLanguage(language);
        this.translateService.use(language.locale);
    }

    private persistLanguage(language: Language): void {
        this.current = language;
        localStorage.setItem(this.getStorageKey(), language.locale);
    }
}
