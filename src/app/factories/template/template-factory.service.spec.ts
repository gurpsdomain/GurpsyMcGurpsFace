import {inject, TestBed} from '@angular/core/testing';

import {TemplateFactoryService} from './template-factory.service';

describe('TemplateFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateFactoryService]
    });
  });

  it('should be created', inject([TemplateFactoryService], (service: TemplateFactoryService) => {
    expect(service).toBeTruthy();
  }));

  it('should create a template when createTemplate() is called', inject([TemplateFactoryService], (service: TemplateFactoryService) => {
    const template = service.createTemplate();

    expect(template).toBeTruthy();
  }));

  it('should create an id for the created template', inject([TemplateFactoryService], (service: TemplateFactoryService) => {
    const template = service.createTemplate();

    expect(template.id).toBeDefined();
  }));

  it('should have a creation date for the created template', inject([TemplateFactoryService], (service: TemplateFactoryService) => {
    const template = service.createTemplate();

    expect(template.createdOn).toBeDefined();
  }));
});
