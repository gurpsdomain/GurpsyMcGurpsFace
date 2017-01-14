import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LanguagesService} from '../../services/languages-service/languages.service';

@Component({
    selector: 'gurpsy-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss'],
    providers: [LanguagesService]
})
export class SideNavigationComponent implements OnInit {

    @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

    private languageService: LanguagesService;

    selectedLanguage;
    languageOptions;

    constructor(languages: LanguagesService) {
        this.languageService = languages;
    }

    ngOnInit(): void {
        this.languageService.getAvailableLanguages().then(languages => this.languageOptions = languages);
        this.languageService.getCurrent().then(language => this.selectedLanguage = language);
    }

    onCloseSideNav(): void {
        this.onCloseSideNavigation.next();
    }

    onLanguageChange(): void {
        this.languageService.setCurrent(this.selectedLanguage);
    }
}
