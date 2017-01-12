import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {LanguagesService} from './services/languages-service/languages.service';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.css'],
  providers: [LanguagesService]
})
export class GurpsyComponent implements OnInit {

  private translateService: TranslateService;
  private languagesService: LanguagesService;
  public isDarkTheme: boolean = false;

  constructor(translate: TranslateService, languages: LanguagesService) {
    this.translateService = translate;
    this.languagesService = languages;
  }

  ngOnInit(): void {
    this.initLanguages();
  }

  initLanguages(): void {
    this.languagesService.getAvailableLanguagesLocales().then(
      availableLanguages => this.translateService.addLangs(availableLanguages));
    this.languagesService.getDefaultLocale().then(
      defaultLocale => this.translateService.setDefaultLang(defaultLocale));
    this.languagesService.getCurrentLocale().then(
      currentlocale => this.translateService.use(currentlocale));
  }
}
