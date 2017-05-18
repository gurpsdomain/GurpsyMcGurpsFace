import {TestBed, inject} from '@angular/core/testing';
import {LibraryService} from './library.service';
import {SettingsService} from '../settings-service/settings.service';
import {StorageService} from '../storage-service/storage.service';
import {SheetStorageDelegate} from '../storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {ConfigStorageDelegate} from '../storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {JsonService} from '../json-service/json.service';

describe('LibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigStorageDelegate,
        SettingsService,
        JsonService,
        LibraryService,
        StorageService,
        SheetStorageDelegate
      ]
    });
  });

  it('should ...', inject([LibraryService], (service: LibraryService) => {
    expect(service).toBeTruthy();
  }));
});
