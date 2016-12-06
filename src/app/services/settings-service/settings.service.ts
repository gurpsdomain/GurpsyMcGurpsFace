import {Injectable} from "@angular/core";


@Injectable()
export class SettingsService {

    private DEFAULT_LANGUAGE: string = "en";
    private AVAILABLE_LANGUAGES: string[] = ["en", "nl"]

    constructor() {
    }

    getCurrentLocale(): Promise<string> {
        return Promise.resolve("nl");
    }

    getDefaultLocale(): Promise<string> {
        return Promise.resolve(this.DEFAULT_LANGUAGE);
    }

    getAvailableLanguages(): Promise<string[]> {
        return Promise.resolve(this.AVAILABLE_LANGUAGES);
    }

}
