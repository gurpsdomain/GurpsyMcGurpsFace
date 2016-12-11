import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {SettingsService} from "../../services/settings-service/settings.service";

@Component({
    selector: 'app-side-navigation',
    templateUrl: 'side-navigation.component.html',
    styleUrls: ['side-navigation.component.css'],
    providers: [SettingsService]
})
export class SideNavigationComponent implements OnInit {

    @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

    private settingsService: SettingsService;

    selectedLanguage = 'nl';
    languageOptions = [
        {
            label: 'Nederlands',
            name: 'nl',
            id: 0
        },
        {
            label: 'English',
            name: 'en',
            id: 1
        }
    ];

    constructor(settings: SettingsService) {
        this.settingsService = settings;
    }

    ngOnInit() {
    }

    onCloseSideNav() {
        this.onCloseSideNavigation.next();
    }
}
