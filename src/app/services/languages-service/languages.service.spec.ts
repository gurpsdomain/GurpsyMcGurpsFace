/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {LanguagesService} from './languages.service';
import {TranslateModule} from 'ng2-translate';

describe('LanguagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LanguagesService
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  });
});
