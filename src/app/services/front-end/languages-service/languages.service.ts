import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguagesService {

  private static ENGLISH = 'en';
  private static DEFAULT: string = LanguagesService.ENGLISH;
  private static AVAILABLE_LANGUAGES: string[] = [LanguagesService.ENGLISH];

  private translateService: TranslateService;

  constructor(translate: TranslateService) {

    this.translateService = translate;

    this.initTranslateService();
  }

  private initTranslateService(): void {
    this.translateService.addLangs(LanguagesService.AVAILABLE_LANGUAGES);
    this.translateService.setDefaultLang(LanguagesService.DEFAULT);
    this.translateService.use(LanguagesService.DEFAULT);
  }
}
