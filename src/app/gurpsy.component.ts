import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {LanguagesService} from './services/languages-service/languages.service';
import {ThemesService} from './services/themes-service/themes.service';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.css'],
  providers: [LanguagesService, ThemesService]
})
export class GurpsyComponent implements OnInit {

  private translateService: TranslateService;
  private languagesService: LanguagesService;
  private themesService: ThemesService;

  constructor(translate: TranslateService, languages: LanguagesService, themes: ThemesService) {
    this.translateService = translate;
    this.languagesService = languages;
    this.themesService = themes;
  }

  ngOnInit(): void {
    this.initLanguages();
    this.initThemes();
  }

  initLanguages(): void {
    this.languagesService.getAvailableLanguagesLocales().then(
      availableLanguages => this.translateService.addLangs(availableLanguages));
    this.languagesService.getDefaultLocale().then(
      defaultLocale => this.translateService.setDefaultLang(defaultLocale));
    this.languagesService.getCurrentLocale().then(
      currentlocale => this.translateService.use(currentlocale));
  }

  initThemes(): void {
    this.themesService.initializeThemes();
  }
}
