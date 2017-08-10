import {inject, TestBed} from '@angular/core/testing';
import {TemplateStorageService} from '../../back-end/storage/delegates/template-storage/template-storage.service';
import {SettingsService} from '../settings/settings.service';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../back-end/logging/logging.service';
import {SheetService} from './sheet.service';
import {TemplateDM} from '../../../models/sheet/template/template.model';

describe('SheetService', () => {

  let templateStorageService: TemplateStorageService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SheetService,
        SettingsService,
        TemplateStorageService
      ]
    });

    templateStorageService = TestBed.get(TemplateStorageService);
  });

  it('should be created', inject([SheetService], (service: SheetService) => {
    expect(service).toBeTruthy();
  }));

  it('should store a template with the current date when updateTemplate() is called', inject([SheetService], (service: SheetService) => {
    const spy = spyOn(templateStorageService, 'updateTemplate');

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const yesterdaysTemplate = new TemplateDM();
    yesterdaysTemplate.lastModified = yesterday;

    const todaysTemplate = new TemplateDM();
    todaysTemplate.lastModified = today;

    service.updateTemplate(yesterdaysTemplate);

    const args = spy.calls.mostRecent().args;
    expect(args[0].lastModified.toDateString()).toBe(today.toDateString());
  }));

  it('should store the template when loadNewTemplate() is called', inject([SheetService], (service: SheetService) => {
    const spy = spyOn(templateStorageService, 'addTemplate');

    const template = new TemplateDM();

    service.loadNewTemplate(template);

    const args = spy.calls.mostRecent().args;
    expect(args[0]).toBe(template);
  }));

  it('should call selectTemplate() on TemplateStorageService when loadNewTemplate() is called',
    inject([SheetService], (service: SheetService) => {
      const spy = spyOn(templateStorageService, 'selectTemplate');

      const template = new TemplateDM();

      service.loadNewTemplate(template);

      expect(spy).toHaveBeenCalled();
    }));
});
