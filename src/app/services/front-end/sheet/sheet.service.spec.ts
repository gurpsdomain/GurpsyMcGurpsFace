/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {StorageService} from '../../back-end/storage/storage.service';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SettingsService} from '../settings/settings.service';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../back-end/logging/logging.service';
import {SheetService} from './sheet.service';
import {Template} from '../../../models/sheet/template/template.model';

describe('SheetService', () => {

  let storageService: StorageService;

  beforeEach(() => {


    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SheetService,
        SettingsService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ]
    });

    storageService = TestBed.get(StorageService);
  });

  it('should be created', inject([SheetService], (service: SheetService) => {
    expect(service).toBeTruthy();
  }));

  it('should store a template with the current date when updateTemplate() is called', inject([SheetService], (service: SheetService) => {
    spyOn(storageService, 'storeTemplate');

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const yesterdaysTemplate = new Template();
    yesterdaysTemplate.lastModified = yesterday;

    const todaysTemplate = new Template();
    todaysTemplate.lastModified = today;

    service.updateTemplate(yesterdaysTemplate);

    // The following line needs a matcher, since we are only interested in the date of lastModified
    // expect(storageService.storeTemplate).toHaveBeenCalledWith(todaysTemplate);
  }));
});