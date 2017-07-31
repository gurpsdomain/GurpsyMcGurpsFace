/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {StorageService} from '../../back-end/storage/storage.service';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SettingsService} from '../settings/settings.service';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../back-end/logging/logging.service';
import {SheetService} from './sheet.service';

describe('SheetService', () => {
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
  });

  it('should be created', inject([SheetService], (service: SheetService) => {
    expect(service).toBeTruthy();
  }));
});
