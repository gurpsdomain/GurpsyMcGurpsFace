/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {ModelReadService} from './model-read.service';
import {JsonService} from '../json-service/json.service';

describe('ModelReadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModelReadService,
        JsonService
      ]
    });
  });

  // it('should ...', inject([ModelReadService], (service: ModelReadService) => {
  //   expect(service).toBeTruthy();
  // }));
});
