import {Injectable} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {Language} from '../../models/language';

@Injectable()
export class LanguagesService {

    private static STORAGE_KEY: string = 'gurpsy-mc-gurps-face.language';

    private static ENGLISH: Language = new Language('en');
    private static DUTCH: Language = new Language('nl');
    private static AVAILABLE_LANGUAGES: Language[] = [LanguagesService.ENGLISH, LanguagesService.DUTCH];
    private static DEFAULT: Language = LanguagesService.ENGLISH;

    private translateService: TranslateService;
    private current: Language;

    constructor(translate: TranslateService) {

        this.translateService = translate;

        let storedLanguageName: string = localStorage.getItem(LanguagesService.STORAGE_KEY);

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

    getDefault(): Promise<Language> {
        return Promise.resolve(LanguagesService.DEFAULT);
    }

    getCurrent(): Promise<Language> {
        return Promise.resolve(this.getDefault());
    }

    setCurrent(language: Language): void {
        this.changeLanguage(language);
    }

    getCurrentLocale(): Promise<string> {
        return Promise.resolve(this.current.locale);
    }

    getDefaultLocale(): Promise<string> {
        let locale: string = LanguagesService.DEFAULT.locale;
        return Promise.resolve(locale);
    }

    getAvailableLanguages(): Promise<Language[]> {
        return Promise.resolve(LanguagesService.AVAILABLE_LANGUAGES);
    }

    getAvailableLanguagesLocales(): Promise<string[]> {

        let languagesLocales: string[] = [];
        for (let language of LanguagesService.AVAILABLE_LANGUAGES) {
            languagesLocales.push(language.locale);
        }
        return Promise.resolve(languagesLocales);
    }

    clearSettings(): void {
      this.setDefaultLanguage();
      localStorage.removeItem(LanguagesService.STORAGE_KEY);
    }

    private setDefaultLanguage(): void {
      this.changeLanguage(LanguagesService.DEFAULT);
    }

    private changeLanguage(language: Language): void {
        this.persistLanguage(language);
        this.translateService.use(language.locale);
    }

    private persistLanguage(language: Language): void {
        this.current = language;
        localStorage.setItem(LanguagesService.STORAGE_KEY, language.locale);
    }
}
