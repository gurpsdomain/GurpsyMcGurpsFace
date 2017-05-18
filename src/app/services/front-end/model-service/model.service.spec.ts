/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {ModelService} from './model.service';
import {Http} from '@angular/http';
import {JsonService} from '../../back-end/json-service/json.service';

describe('ModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Http,
        ModelService,
        JsonService
      ]
    });
  });

  // it('should ...', inject([ModelService], (service: ModelService) => {
  //   expect(service).toBeTruthy();
  // }));
});
