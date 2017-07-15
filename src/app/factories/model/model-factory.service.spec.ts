import { TestBed, inject } from '@angular/core/testing';

import { ModelFactoryService } from './model-factory.service';

describe('ModelFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelFactoryService]
    });
  });

  it('should be created', inject([ModelFactoryService], (service: ModelFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
