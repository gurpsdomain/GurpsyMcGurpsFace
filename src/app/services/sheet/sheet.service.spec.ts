import {inject, TestBed} from '@angular/core/testing';
import {TemplateRepository} from '../../repositories/template/template.repository';
import {SettingsService} from '../settings/settings.service';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../logging/logging.service';
import {SheetService} from './sheet.service';
import {SheetTemplate} from '../../models/sheet-template/sheet-template.model';

describe('SheetService', () => {

  let templateStorageService: TemplateRepository;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SheetService,
        SettingsService,
        TemplateRepository
      ]
    });

    templateStorageService = TestBed.get(TemplateRepository);
  });

  it('should be created', inject([SheetService], (service: SheetService) => {
    expect(service).toBeTruthy();
  }));

  it('[updateTemplate()] should store a template with the current date when updateTemplate() is called',
    inject([SheetService], (service: SheetService) => {
      const spy = spyOn(templateStorageService, 'updateTemplate');

      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      const yesterdaysTemplate = new SheetTemplate();
      yesterdaysTemplate.lastModified = yesterday;

      const todaysTemplate = new SheetTemplate();
      todaysTemplate.lastModified = today;

      service.updateTemplate(yesterdaysTemplate);

      const args = spy.calls.mostRecent().args;
      expect(args[0].metaDate.lastModified.toDateString()).toBe(today.toDateString());
    }));

  it('[loadNewTemplate()] should store the template when loadNewTemplate() is called',
    inject([SheetService], (service: SheetService) => {
      const spy = spyOn(templateStorageService, 'addTemplate');

      const template = new SheetTemplate();

      service.loadNewTemplate(template);

      const args = spy.calls.mostRecent().args;
      expect(args[0]).toBe(template);
    }));

  it('[loadNewTemplate()] should call addAndSelectTemplate() on TemplateRepository when loadNewTemplate() is called',
    inject([SheetService], (service: SheetService) => {
      const spy = spyOn(templateStorageService, 'addAndSelectTemplate');

      const template = new SheetTemplate();

      service.loadNewTemplate(template);

      expect(spy).toHaveBeenCalled();
    }));

  it('[closeTemplate()] should call deselectTemplate() on TemplateRepository when closeTemplate() is called',
    inject([SheetService], (service: SheetService) => {
      const spy = spyOn(templateStorageService, 'deselectTemplate');

      service.closeTemplate();

      expect(spy).toHaveBeenCalled();
    }));

  it('[deleteTemplate()] should call deleteTemplate() on TemplateRepository when deleteTemplate() is called',
    inject([SheetService], (service: SheetService) => {
      const spy = spyOn(templateStorageService, 'deleteTemplate');

      service.deleteTemplate(new SheetTemplate());

      expect(spy).toHaveBeenCalled();
    }));
});
