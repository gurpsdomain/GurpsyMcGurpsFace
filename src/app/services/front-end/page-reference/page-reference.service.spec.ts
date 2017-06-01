import {TestBed, inject} from '@angular/core/testing';
import {PageReferenceService} from './page-reference.service';
import {SettingsService} from '../settings/settings.service';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {StorageService} from '../../back-end/storage/storage.service';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';

describe('PageReferenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SettingsStorageDelegate,
        SettingsService,
        PageReferenceService,
        StorageService,
        SheetStorageDelegate
      ]
    });
  });

  it('should create a PageReferenceService', inject([PageReferenceService], (service: PageReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
