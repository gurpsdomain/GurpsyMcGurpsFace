/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {ModelService} from './model.service';
import {Http} from '@angular/http';
import {ModelTransformerService} from '../../back-end/model-transformer/model-transformer.service';
import {LoggingService} from '../../back-end/logging/logging.service';

describe('ModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Http,
        LoggingService,
        ModelService,
        ModelTransformerService
      ]
    });
  });

  // it('should ...', inject([ModelService], (service: ModelService) => {
  //   expect(service).toBeTruthy();
  // }));
});
