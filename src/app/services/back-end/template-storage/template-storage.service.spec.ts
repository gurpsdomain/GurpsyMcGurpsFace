/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {TemplateStorageService} from './template-storage.service';
import {LoggingService} from '../logging/logging.service';
import {SheetTemplate} from '../../../models/sheet-template/sheet-template.model';
import {TemplateStore} from '../../../models/template-store/template-store.model';
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

  it('[getTemplates()] should return an empty SheetTemplate[] when getTemplates() is called, but ' +
    'Local Storage is empty',
    inject([TemplateStorageService], (service: TemplateStorageService) => {
      service.getTemplates().then(templates => expect(templates.length).toBe(0));
    }));


  it('[addTemplate()] should create a new entry in LocalStorage, when addTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {
      const template = new SheetTemplate();

      service.addTemplate(template);

      const retrievedTemplates = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplates).toBeTruthy();
    }));

  it('[addTemplate()] should store a TemplateStore Object with the given SheetTemplate in LocalStorage, ' +
    'when addTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      const template = new SheetTemplate();

      service.addTemplate(template);

      const json = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);
      const jsonConvert = new JsonConvert();
      const jsonObject = JSON.parse(json);
      const retrievedTemplates = jsonConvert.deserializeObject(jsonObject, TemplateStore);


      let found = false;
      for (const storedTemplate of retrievedTemplates.templates) {
        if (storedTemplate.id === template.id) {
          found = true;
          break;
        }
      }

      expect(found).toBeTruthy();
    }));

  it('[addTemplate()] should not store a TemplateStore Object with the given SheetTemplate in ' +
    'LocalStorage, when addTemplate() is called and a SheetTemplate with the same id has already been stored',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      const template = new SheetTemplate();

      service.addTemplate(template);
      service.addTemplate(template);

      const json = localStorage.getItem(LOCAL_STORAGE_TEMPLATES_KEY);
      const jsonConvert = new JsonConvert();
      const jsonObject = JSON.parse(json);
      const retrievedTemplates = jsonConvert.deserializeObject(jsonObject, TemplateStore);

      expect(retrievedTemplates.templates.length).toBe(1);
    }));


  it('[selectTemplate()] should set the id of the given SheetTemplate in Session Storage when ' +
    'selectTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {
      const template = new SheetTemplate();

      service.selectTemplate(template);

      const retrievedTemplateId = sessionStorage.getItem(SESSION_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplateId).toBe(template.id);
    }));

  it('[deselectTemplate()] should remove the currently stored id from Session Storage when ' +
    'deselectTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {
      const template = new SheetTemplate();

      service.selectTemplate(template);

      service.deselectTemplate();

      const retrievedTemplateId = sessionStorage.getItem(SESSION_STORAGE_TEMPLATES_KEY);

      expect(retrievedTemplateId).toBeNull();
    }));

  it('[getSelectedTemplate()] should return a rejected Promise when getSelectedTemplate() ' +
    'is called, but none was selected',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      let rejected = false;
      service.getSelectedTemplate().catch(() => {
        rejected = true;
        expect(rejected).toBe(true);
      })
    }));

  it('[getSelectedTemplate()] should return the selected SheetTemplate when getSelectedTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      const template = new SheetTemplate();

      service.selectTemplate(template);
      service.getSelectedTemplate().then(selectedTemplate => expect(selectedTemplate.id).toBe(template.id));
    }));

  it('[updateTemplate()] should update the SheetTemplate when updateTemplate() is called',
    inject([TemplateStorageService], (service: TemplateStorageService) => {

      const originalTemplate = new SheetTemplate();
      service.addTemplate(originalTemplate);
      service.selectTemplate(originalTemplate);

      const updatedTemplate = new SheetTemplate();
      updatedTemplate.id = originalTemplate.id;
      updatedTemplate.name = 'Dai Blackthorn';

      service.updateTemplate(updatedTemplate);

      service.getSelectedTemplate().then(template =>
        expect(template.name).toBe(updatedTemplate.name));
    }));
});
