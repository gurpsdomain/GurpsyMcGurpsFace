import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LanguagesService} from '../../services/languages-service/languages.service';
import {ThemesService} from '../../services/themes-service/themes.service';

@Component({
    selector: 'gurpsy-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.css'],
    providers: [LanguagesService]
})
export class SideNavigationComponent implements OnInit {

    @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

    private languageService: LanguagesService;
    private themesService: ThemesService;

    selectedLanguage;
    languageOptions;
    selectedTheme;
    themeOptions;

    constructor(languages: LanguagesService, themes: ThemesService) {
        this.languageService = languages;
        this.themesService = themes;
    }

    ngOnInit(): void {
        this.themesService.getAvailableThemes().then(themes => this.themeOptions = themes);
        this.themesService.getCurrent().then(theme => this.selectedTheme = theme);
        this.languageService.getAvailableLanguages().then(languages => this.languageOptions = languages);
        this.languageService.getCurrent().then(language => this.selectedLanguage = language);
    }

    onCloseSideNav(): void {
        this.onCloseSideNavigation.next();
    }

    onLanguageChange(): void {
        this.languageService.setCurrent(this.selectedLanguage);
    }

    onThemeChange(): void {
        this.themesService.setCurrent(this.selectedTheme);
    }
}
