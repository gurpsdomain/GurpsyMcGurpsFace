/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DomainModelServiceService } from './domain-model.service';

describe('DomainModelServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainModelServiceService]
    });
  });

  it('should ...', inject([DomainModelServiceService], (service: DomainModelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
