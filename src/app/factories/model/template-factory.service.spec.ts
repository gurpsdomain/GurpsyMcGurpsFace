import { TestBed, inject } from '@angular/core/testing';

import { TemplateFactoryService } from './template-factory.service';

describe('TemplateFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateFactoryService]
    });
  });

  it('should be created', inject([TemplateFactoryService], (service: TemplateFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
