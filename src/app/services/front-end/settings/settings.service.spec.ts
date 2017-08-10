/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {SettingsService} from './settings.service';
import {StorageService} from '../../back-end/storage/storage.service';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {TemplateStorageService} from '../../back-end/storage/delegates/template-storage/template-storage.service';
import {LoggingService} from '../../back-end/logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SettingsService,
        StorageService,
        SettingsStorageDelegate,
        TemplateStorageService
      ]
    });
  });

  it('should be created', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
