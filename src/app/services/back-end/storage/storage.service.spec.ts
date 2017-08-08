/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {StorageService} from './storage.service';
import {SettingsStorageDelegate} from './delegates/settings-storage-delegate/settings-storage-delegate';
import {TemplateStorageDelegate} from './delegates/template-storage-delegate/template-storage-delegate';
import {LoggingService} from '../logging/logging.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggingService,
        StorageService,
        SettingsStorageDelegate,
        TemplateStorageDelegate
      ]
    });
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));
});
