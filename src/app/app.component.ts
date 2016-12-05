import {Component} from "@angular/core";
import {TranslateService} from "ng2-translate";
import { SettingsService } from './services/settings-service/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SettingsService]
})
export class AppComponent {

    constructor(translate: TranslateService, private settingsService: SettingsService) {
        translate.addLangs(this.settingsService.getAvailableLanguage());
        translate.setDefaultLang(this.settingsService.getDefaultLocale());
        translate.use(this.settingsService.getCurrentLocale());
    }


}
