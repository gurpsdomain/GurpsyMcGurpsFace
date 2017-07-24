/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {ModelService} from './model.service';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {StorageService} from '../../back-end/storage/storage.service';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SettingsService} from '../settings/settings.service';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../back-end/logging/logging.service';

describe('ModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        ModelService,
        SettingsService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ]
    });
  });

  it('should be created', inject([ModelService], (service: ModelService) => {
    expect(service).toBeTruthy();
  }));
});
