/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {SheetBodyService} from './sheet-body.service';
import {SettingsService} from '../settings/settings.service';

describe('SheetBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SettingsService,
        SheetBodyService
      ]
    });
  });

  // it('should ...', inject([SheetBodyService], (service: SheetBodyService) => {
  //   expect(service).toBeTruthy();
  // }));
});
