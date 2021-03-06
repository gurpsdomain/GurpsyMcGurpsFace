import {TemplateStore} from './template-store.model';
import {Template} from '../template/template.model';

describe('Model Object TemplateStore', () => {
  let templates: TemplateStore;

  const CHARACTER_NAME = 'Dai Blackthorn';

  beforeEach(() => templates = new TemplateStore());

  it('should be created', () => {
    expect(templates).toBeTruthy();
  });

  it('[addTemplate()] should add a template when addTemplate() is called', () => {

    const template = new Template();

    templates.addTemplate(template);

    expect(templates.templates.length).toBe(1);
  });

  it('[addTemplate()] should return true when addTemplate() is called', () => {

    const template = new Template();

    const added = templates.addTemplate(template);

    expect(added).toBeTruthy();
  });

  it('[addTemplate()] should not add a template when addTemplate() is called, but the template was already added', () => {

    const template = new Template();

    templates.addTemplate(template);
    templates.addTemplate(template);

    expect(templates.templates.length).toBe(1);
  });

  it('[addTemplate(false)] should not add a template when addTemplate(false) is called, and the template was already added', () => {

    const template = new Template();

    templates.addTemplate(template);
    templates.addTemplate(template, false);

    expect(templates.templates.length).toBe(1);
  });

  it('[addTemplate(true)] should add a template when addTemplate(true) is called, but the template was already added', () => {

    const template = new Template();
    const templateCopy = new Template();

    templateCopy.id = template.id;
    templateCopy.name = CHARACTER_NAME;

    templates.addTemplate(template);
    templates.addTemplate(templateCopy, true);

    expect(templates.templates.length).toBe(1);
    expect(templates.getTemplate(template.id).name).toBe(templateCopy.name);
  });

  it('[addTemplate() ]should return false when addTemplate() is called, but the template was already added', () => {

    const template = new Template();

    templates.addTemplate(template);
    const added = templates.addTemplate(template);

    expect(added).toBeFalsy();
  });

  it('[addTemplate(false) ]should return false when addTemplate(false) is called, and the template was already added', () => {

    const template = new Template();

    templates.addTemplate(template);
    const added = templates.addTemplate(template, false);

    expect(added).toBeFalsy();
  });

  it('[addTemplate(true) ]should return false when addTemplate(true) is called, and the template was already added', () => {

    const template = new Template();

    templates.addTemplate(template);
    const added = templates.addTemplate(template, true);

    expect(added).toBeTruthy();
  });

  it('[getTemplate()] should return the template with the given id  when getTemplate() is called', () => {

    const template = new Template();

    templates.addTemplate(template);

    const retrievedTemplate = templates.getTemplate(template.id);

    expect(retrievedTemplate.id).toBe(template.id);
  });

  it('[getTemplate()] should return undefined when getTemplate() is called, but none is present with the given id', () => {

    const template = new Template();
    const retrievedTemplate = templates.getTemplate(template.id);

    expect(retrievedTemplate).toBeUndefined();
  });

  it('[updateTemplate()] should update the template when updateTemplate() is called', () => {

    const originalTemplate = new Template();
    templates.addTemplate(originalTemplate);

    const updatedTemplate = new Template();
    updatedTemplate.id = originalTemplate.id;
    updatedTemplate.name = CHARACTER_NAME;

    templates.updateTemplate(updatedTemplate);

    const retrievedTemplate = templates.getTemplate(updatedTemplate.id);

    expect(retrievedTemplate.name).toBe(updatedTemplate.name);
  });

  it('[deleteTemplate()] should delete the template when deleteTemplate() is called', () => {

    const templateOne = new Template();
    templates.addTemplate(templateOne);


    const templateTwo = new Template();
    templates.addTemplate(templateTwo);

    templates.deleteTemplate(templateOne);

    expect(templates.templates.length).toBe(1);
  });
});
