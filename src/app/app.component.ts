import {Component, OnInit} from "@angular/core";
import {TranslateService} from "ng2-translate";
import {SettingsService} from "./services/settings-service/settings.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SettingsService]
})
export class AppComponent implements OnInit {

    private translateService: TranslateService;
    private settingsService: SettingsService;

    constructor(translate: TranslateService, settings: SettingsService) {
        this.translateService = translate;
        this.settingsService = settings;
    }

    ngOnInit(): void {
        this.settingsService.getAvailableLanguages().then(availableLanguages => this.translateService.addLangs(availableLanguages));
        this.settingsService.getDefaultLocale().then(defaultLocale => this.translateService.setDefaultLang(defaultLocale));
        this.settingsService.getCurrentLocale().then(currentlocale => this.translateService.use(currentlocale));
    }


}
