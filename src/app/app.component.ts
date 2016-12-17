import {Component, OnInit} from "@angular/core";
import {TranslateService} from "ng2-translate";
import {LanguagesService} from "./services/languages-service/languages.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LanguagesService]
})
export class AppComponent implements OnInit {

    private translateService: TranslateService;
    private languagesService: LanguagesService;

    constructor(translate: TranslateService, languages: LanguagesService) {
        this.translateService = translate;
        this.languagesService = languages;
    }

    ngOnInit(): void {
        this.languagesService.getAvailableLanguagesLocales().then(availableLanguages => this.translateService.addLangs(availableLanguages));
        this.languagesService.getDefaultLocale().then(defaultLocale => this.translateService.setDefaultLang(defaultLocale));
        this.languagesService.getCurrentLocale().then(currentlocale => this.translateService.use(currentlocale));
    }
}
