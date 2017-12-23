/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {TemplateRepository} from './template.repository';
import {LoggingService} from '../../services/logging/logging.service';
import {Template} from '../../models/template/template.model';
import {TemplateStore} from '../../models/template-store/template-store.model';
import {JsonConvert} from 'json2typescript';

describe('TemplateRepository', () => {

  const LOCAL_STORAGE_TEMPLATES_KEY = 'gurpsy-mc-gurps-face.templates';
  const SESSION_STORAGE_TEMPLATES_KEY = 'gurpsy-mc-gurps-face.template';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggingService,
        TemplateRepository
      ]
    });

    localStorage.clear();
    sessionStorage.clear();
  });

  it('should be created', inject([TemplateRepository], (service: TemplateRepository) => {
    expect(service).toBeTruthy();
  }));

  it('[getTemplates()] should return an empty Template[] when getTemplates() is called, but ' +
    'Local Storage is empty',
    inject([TemplateRepository], (service: TemplateRepository) => {
      service.getTemplates().then(templates => expect(templates.length).toBe(0));
    }));


  it('[addTemplate()] should create a new entry in LocalStorage, when addTemplate() is called',
    inject([TemplateRepository], (service: TemplateRepository) => {
      const template = new Template();

      service.addTemplate(template);

      const retrievedTemplates = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplates).toBeTruthy();
    }));

  it('[addTemplate()] should store a TemplateStore Object with the given Template in LocalStorage, ' +
    'when addTemplate() is called',
    inject([TemplateRepository], (service: TemplateRepository) => {

      const template = new Template();

      service.addTemplate(template);

      const json = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);
      const jsonConvert = new JsonConvert();
      const jsonObject = JSON.parse(json);
      const retrievedTemplates = jsonConvert.deserializeObject(jsonObject, TemplateStore);

      let found = false;
      for (const storedTemplate of retrievedTemplates.templates) {
        console.log('Iterating over: ', storedTemplate);
        console.log('Using reference: ', template);
        if (storedTemplate && storedTemplate.id === template.id) {
          found = true;
          break;
        }
      }

      expect(found).toBeTruthy();
    }));

  it('[addTemplate()] should not store a TemplateStore Object with the given Template in ' +
    'LocalStorage, when addTemplate() is called and a Template with the same id has already been stored',
    inject([TemplateRepository], (service: TemplateRepository) => {

      const template = new Template();

      service.addTemplate(template);
      service.addTemplate(template);

      const json = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);
      const jsonConvert = new JsonConvert();
      const jsonObject = JSON.parse(json);
      const retrievedTemplates = jsonConvert.deserializeObject(jsonObject, TemplateStore);

      expect(retrievedTemplates.templates.length).toBe(1);
    }));

  it('[selectTemplate()] should set the id of the given Template in Session Storage when ' +
    'selectTemplate() is called',
    inject([TemplateRepository], (service: TemplateRepository) => {
      const template = new Template();

      service.selectTemplate(template);

      const retrievedTemplateId = sessionStorage.getItem(SESSION_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplateId).toBe(template.id);
    }));

  it('[deselectTemplate()] should remove the currently stored id from Session Storage when ' +
    'deselectTemplate() is called',
    inject([TemplateRepository], (service: TemplateRepository) => {
      const template = new Template();

      service.selectTemplate(template);

      service.deselectTemplate();

      const retrievedTemplateId = sessionStorage.getItem(SESSION_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplateId).toBeNull();
    }));

  it('[getSelectedTemplate()] should return a rejected Promise when getSelectedTemplate() ' +
    'is called, but none was selected',
    inject([TemplateRepository], (service: TemplateRepository) => {

      let rejected = false;
      service.getSelectedTemplate().catch(() => {
        rejected = true;
        expect(rejected).toBe(true);
      });
    }));

  it('[getSelectedTemplate()] should return the selected Template when getSelectedTemplate() is called',
    inject([TemplateRepository], (service: TemplateRepository) => {

      const template = new Template();

      service.selectTemplate(template);
      service.getSelectedTemplate().then(selectedTemplate => expect(selectedTemplate.id).toBe(template.id));
    }));

  it('[updateTemplate()] should update the Template when updateTemplate() is called',
    inject([TemplateRepository], (service: TemplateRepository) => {

      const originalTemplate = new Template();
      service.addTemplate(originalTemplate);
      service.selectTemplate(originalTemplate);

      const updatedTemplate = new Template();
      updatedTemplate.id = originalTemplate.id;
      updatedTemplate.name = 'Dai Blackthorn';

      service.updateTemplate(updatedTemplate);

      service.getSelectedTemplate().then(template =>
        expect(template.name).toBe(updatedTemplate.name));
    }));


  it('[deleteTemplate()] should delete the Template when deleteTemplate() is called',
    inject([TemplateRepository], (service: TemplateRepository) => {

      const firstTemplate = new Template();
      service.addTemplate(firstTemplate);

      const secondTemplate = new Template();
      service.addTemplate(secondTemplate);

      service.deleteTemplate(firstTemplate);

      const json = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);
      const jsonConvert = new JsonConvert();
      const jsonObject = JSON.parse(json);
      const retrievedTemplates = jsonConvert.deserializeObject(jsonObject, TemplateStore);

      expect(retrievedTemplates.templates.length).toBe(1);
    }));

  it('[deleteTemplate()] should clear the selected Template if deleteTemplate() is called and ' +
    'the selected Template is the same as the deleted Template',
    inject([TemplateRepository], (service: TemplateRepository) => {

      const firstTemplate = new Template();
      service.addTemplate(firstTemplate);
      service.selectTemplate(firstTemplate);

      const secondTemplate = new Template();
      service.addTemplate(secondTemplate);

      service.deleteTemplate(firstTemplate);

      const retrievedTemplateId = sessionStorage.getItem(SESSION_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplateId).toBeNull();
    }));
});
