/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {TemplateStorageService} from './template-storage.service';
import {LoggingService} from '../logging/logging.service';
import {TemplateDM} from '../../../models/sheet/template/template.model';
import {TemplatesDM} from '../../../models/templates/templates.model';
import {JsonConvert} from 'json2typescript';

describe('TemplateStorageService', () => {

  const LOCAL_STORAGE_TEMPLATES_KEY = 'gurpsy-mc-gurps-face.templates';
  const SESSION_STORAGE_TEMPLATES_KEY = 'gurpsy-mc-gurps-face.template';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggingService,
        TemplateStorageService
      ]
    });

    localStorage.clear();
    sessionStorage.clear();
  });

  it('should be created', inject([TemplateStorageService], (service: TemplateStorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an empty TemplateDM[] when getTemplates() is called, but Local Storage is empty',
    inject([TemplateStorageService], (service: TemplateStorageService) => {
      service.getTemplates().then(templates => expect(templates.length).toBe(0));
    }));


  it('should create a new entry in LocalStorage, when addTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {
      const template = new TemplateDM();

      service.addTemplate(template);

      const retrievedTemplates = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplates).toBeTruthy();
    }));

  it('should store a TemplatesDM Object with the given TemplateDM in LocalStorage, when addTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      const template = new TemplateDM();

      service.addTemplate(template);

      const json = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);
      const jsonConvert = new JsonConvert();
      const jsonObject = JSON.parse(json);
      const retrievedTemplates = jsonConvert.deserializeObject(jsonObject, TemplatesDM);


      let found = false;
      for (const storedTemplate of retrievedTemplates.templates) {
        if (storedTemplate.id === template.id) {
          found = true;
          break;
        }
      }

      expect(found).toBeTruthy();
    }));

  it('should not store a TemplatesDM Object with the given TemplateDM in LocalStorage, when addTemplate() is ' +
    'called and a TemplateDM with the same id has already been stored',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      const template = new TemplateDM();

      service.addTemplate(template);
      service.addTemplate(template);

      const json = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);
      const jsonConvert = new JsonConvert();
      const jsonObject = JSON.parse(json);
      const retrievedTemplates = jsonConvert.deserializeObject(jsonObject, TemplatesDM);

      expect(retrievedTemplates.templates.length).toBe(1);
    }));


  it('should set the id of the given TemplateDM in Session Storage when selectTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {
      const template = new TemplateDM();

      service.selectTemplate(template);

      const retrievedTemplateId = sessionStorage.getItem(SESSION_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplateId).toBe(template.id);
    }));

  it('should add the template to Local Storage, if it is not yet added, when selectTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {
      const template = new TemplateDM();

      service.selectTemplate(template);

      const json = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);
      const jsonConvert = new JsonConvert();
      const jsonObject = JSON.parse(json);
      const retrievedTemplates = jsonConvert.deserializeObject(jsonObject, TemplatesDM);

      let found = false;
      for (const storedTemplate of retrievedTemplates.templates) {
        if (storedTemplate.id === template.id) {
          found = true;
          break;
        }
      }

      expect(found).toBeTruthy();
    }));

  it('should return a rejected Promise when getSelectedTemplate() is called, but none was selected',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      let rejected = false;
      service.getSelectedTemplate().catch(() => {
        rejected = true;
        expect(rejected).toBe(true);
      })
    }));

  it('should return the selected TemplateDM when getSelectedTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      const template = new TemplateDM();

      service.selectTemplate(template);
      service.getSelectedTemplate().then(selectedTemplate => expect(selectedTemplate.id).toBe(template.id));
    }));

  it('should update the TemplateDM when updateTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      const originalTemplate = new TemplateDM();
      service.addTemplate(originalTemplate);
      service.selectTemplate(originalTemplate);

      const updatedTemplate = new TemplateDM();
      updatedTemplate.id = originalTemplate.id;
      updatedTemplate.name = 'Dai Blackthorn';

      service.updateTemplate(updatedTemplate);

      service.getSelectedTemplate().then(template =>
        expect(template.name).toBe(updatedTemplate.name));
    }));
});
