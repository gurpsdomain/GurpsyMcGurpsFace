/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {SheetBodyService} from './sheet-body.service';
import {SettingsService} from '../settings/settings.service';
import {StorageService} from '../../back-end/storage/storage.service';
import {TemplateStorageDelegate} from '../../back-end/storage/delegates/template-storage-delegate/template-storage-delegate';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {LoggingService} from '../../back-end/logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('SheetBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SettingsStorageDelegate,
        SettingsService,
        SheetBodyService,
        TemplateStorageDelegate,
        StorageService
      ]
    });
  });

  it('should be created', inject([SheetBodyService], (service: SheetBodyService) => {
    expect(service).toBeTruthy();
  }));
});
