/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {SheetBodyService} from './sheet-body.service';
import {ConfigService} from '../config-service/config.service';

describe('SheetBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        SheetBodyService
      ]
    });
  });

  // it('should ...', inject([SheetBodyService], (service: SheetBodyService) => {
  //   expect(service).toBeTruthy();
  // }));
});
