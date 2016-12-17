import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {LanguagesService} from "../../services/languages-service/languages.service";

@Component({
    selector: 'app-side-navigation',
    templateUrl: 'side-navigation.component.html',
    styleUrls: ['side-navigation.component.css'],
    providers: [LanguagesService]
})
export class SideNavigationComponent implements OnInit {

    @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

    private settingsService: LanguagesService;

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

    selectedTheme = 'default';
    themeOptions = [
        {
            label: 'Default',
            name: 'default',
            id: 0
        },
        {
            label: 'Darcula',
            name: 'darcula',
            id: 1
        }
    ];

    constructor(settings: LanguagesService) {
        this.settingsService = settings;
    }

    ngOnInit() : void{
    }

    onCloseSideNav() {
        this.onCloseSideNavigation.next();
    }
}
