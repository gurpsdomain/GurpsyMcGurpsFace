/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {OutputModelService} from './output-model.service';
import {JsonService} from '../json-service/json.service';

describe('OutputModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OutputModelService,
        JsonService
      ]
    });
  });

  // it('should ...', inject([OutputModelService], (service: OutputModelService) => {
  //   expect(service).toBeTruthy();
  // }));
});
