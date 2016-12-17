import {Injectable} from "@angular/core";
import {TranslateService} from 'ng2-translate';
import {Language} from "../../models/language";

@Injectable()
export class LanguagesService{

    private static ENGLISH: Language = new Language(0, "en", "English");
    private static DUTCH: Language = new Language(1, "nl", "Nederlands");
    private static AVAILABLE_LANGUAGES: Language[] = [LanguagesService.ENGLISH, LanguagesService.DUTCH];
    private static DEFAULT: Language = LanguagesService.ENGLISH;

    constructor(translate: TranslateService) {
        // translate.get('nl').subscribe((res: string) => {
        //     console.log(res);
        // })
    }

    getDefault(): Promise<Language> {
        return Promise.resolve(LanguagesService.DEFAULT);
    }

    getCurrentLocale(): Promise<string> {
        return Promise.resolve("en");
    }

    getDefaultLocale(): Promise<string>{
        var locale: string = LanguagesService.DEFAULT.name;
        return Promise.resolve(locale);
    }

    getAvailableLanguages(): Promise<Language[]> {
        return  Promise.resolve(LanguagesService.AVAILABLE_LANGUAGES);
    }

    getAvailableLanguagesLocales(): Promise<string[]> {

        var languagesLocales: string[] = [];
        for (let language of LanguagesService.AVAILABLE_LANGUAGES) {
           languagesLocales.push(language.name);
        }
        return  Promise.resolve(languagesLocales);
    }
}
