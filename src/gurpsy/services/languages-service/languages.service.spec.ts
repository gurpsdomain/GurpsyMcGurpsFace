/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {LanguagesService} from './languages.service';
import {TranslateParser, TranslateLoader, TranslateService} from 'ng2-translate';

describe('LanguagesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LanguagesService,
                TranslateService,
                TranslateLoader,
                TranslateParser]
        });
    });

    it('should ...', inject([LanguagesService], (service: LanguagesService) => {
        expect(service).toBeTruthy();
    }));
});
