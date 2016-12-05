import {Injectable} from "@angular/core";


@Injectable()
export class SettingsService {

    private DEFAULT_LANGUAGE: string = "en";
    private AVAILABLE_LANGUAGES: string[] = ["en", "nl"]

    constructor() {
    }

    getCurrentLocale(): string {
        return "en";
    }

    getDefaultLocale(): string {
        return this.DEFAULT_LANGUAGE;
    }

    getAvailableLanguage(): string[] {
        return this.AVAILABLE_LANGUAGES;
    }

}
