import {TestBed} from '@angular/core/testing';
import {TemplateStore} from './template-store.model';
import {SheetTemplate} from '../sheet-template/sheet-template.model';


describe('Model Object TemplateStore', () => {
  let templates: TemplateStore;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => templates = new TemplateStore());

  it('should be created', () => {
    expect(templates).toBeTruthy();
  });

  it('should add a template when addTemplate() is called', () => {

    const template = new SheetTemplate();

    templates.addTemplate(template);

    expect(templates.templates.length).toBe(1);
  });

  it('should return true when addTemplate() is called', () => {

    const template = new SheetTemplate();

    const added = templates.addTemplate(template);

    expect(added).toBeTruthy();
  });

  it('should not add a template when addTemplate() is called, but the template was already added', () => {

    const template = new SheetTemplate();

    templates.addTemplate(template);
    templates.addTemplate(template);

    expect(templates.templates.length).toBe(1);
  });

  it('should return false when addTemplate() is called, but the template was already added', () => {

    const template = new SheetTemplate();

    templates.addTemplate(template);
    const added = templates.addTemplate(template);

    expect(added).toBeFalsy();
  });

  it('should return the template with the given id  when getTemplate() is called', () => {

    const template = new SheetTemplate();

    templates.addTemplate(template);

    const retrievedTemplate = templates.getTemplate(template.id);

    expect(retrievedTemplate.id).toBe(template.id);
  });

  it('should return undefined when getTemplate() is called, but none is present with the given id', () => {

    const template = new SheetTemplate();
    const retrievedTemplate = templates.getTemplate(template.id);

    expect(retrievedTemplate).toBeUndefined();
  });

  it('should update the template when updateTemplate() is called', () => {

    const originalTemplate = new SheetTemplate();
    templates.addTemplate(originalTemplate);

    const updatedTemplate = new SheetTemplate();
    updatedTemplate.id = originalTemplate.id;
    updatedTemplate.name = 'Dai Blackthorn';

    templates.updateTemplate(updatedTemplate);

    const retrievedTemplate = templates.getTemplate(updatedTemplate.id)

    expect(retrievedTemplate.name).toBe(updatedTemplate.name);
  });

})
