/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {StorageService} from './storage.service';
import {SettingsStorageDelegate} from './delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {LoggingService} from '../logging/logging.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        SettingsStorageDelegate,
        SheetStorageDelegate
      ]
    });
  });

  it('should create a StorageService', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));
});
