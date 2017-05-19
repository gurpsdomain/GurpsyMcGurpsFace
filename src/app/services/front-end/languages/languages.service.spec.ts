/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {LanguagesService} from './languages.service';
import {TranslateModule} from '@ngx-translate/core';

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

  it('should create a LanguagesService', inject([LanguagesService], (service: LanguagesService) => {
    expect(service).toBeTruthy();
  }));
});
