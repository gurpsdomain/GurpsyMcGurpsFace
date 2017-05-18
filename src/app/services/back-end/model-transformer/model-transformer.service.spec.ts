import { TestBed, inject } from '@angular/core/testing';

import { ModelTransformerService } from './model-transformer.service';

describe('ModelTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelTransformerService]
    });
  });

  it('should be created', inject([ModelTransformerService], (service: ModelTransformerService) => {
    expect(service).toBeTruthy();
  }));
});
