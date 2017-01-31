/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {ModelReadService} from './model-read.service';
import {ReadModelCreaterService} from '../read-model-creator-service/read-model-creator.service';

describe('ModelReadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModelReadService,
        ReadModelCreaterService
      ]
    });
  });

  // it('should ...', inject([ModelReadService], (service: ModelReadService) => {
  //   expect(service).toBeTruthy();
  // }));
});
