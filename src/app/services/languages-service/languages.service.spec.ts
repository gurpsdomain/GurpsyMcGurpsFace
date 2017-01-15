/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {LanguagesService} from './languages.service';
import {TranslateModule} from 'ng2-translate';
import {ConfigurationService} from '../configuration-service/configuration.service';

describe('LanguagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LanguagesService,
        ConfigurationService
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  });
});
