import {TestBed, inject} from '@angular/core/testing';
import {LibraryService} from './library.service';
import {SettingsService} from '../settings/settings.service';
import {ConfigStorageDelegate} from '../../back-end/storage/delegates/config-storage-delegate/config-storage-delegate';
import {JsonService} from '../../back-end/json/json.service';
import {StorageService} from '../../back-end/storage/storage.service';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';

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
