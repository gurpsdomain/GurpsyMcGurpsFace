import {TestBed, inject} from '@angular/core/testing';
import {LibraryService} from './library.service';
import {SettingsService} from '../settings/settings.service';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {JsonService} from '../../back-end/json/json.service';
import {StorageService} from '../../back-end/storage/storage.service';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';

describe('LibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SettingsStorageDelegate,
        SettingsService,
        JsonService,
        LibraryService,
        StorageService,
        SheetStorageDelegate
      ]
    });
  });

  it('should create a LibraryService', inject([LibraryService], (service: LibraryService) => {
    expect(service).toBeTruthy();
  }));
});
