/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModelReadService } from './model-read.service';

describe('ModelReadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelReadService]
    });
  });

  it('should ...', inject([ModelReadService], (service: ModelReadService) => {
    expect(service).toBeTruthy();
  }));
});
