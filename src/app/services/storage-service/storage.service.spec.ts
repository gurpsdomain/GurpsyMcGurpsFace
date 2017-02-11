/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {StorageService} from './storage.service';
import {LanguageStorageDelegate} from './delegates/language-storage-delegate/language-storage-delegate';
import {ThemeStorageDelegate} from './delegates/theme-storage-delegate/theme-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        ThemeStorageDelegate,
        SheetStorageDelegate,
        LanguageStorageDelegate
      ]
    });
  });

  // it('should ...', inject([StorageService], (service: StorageService) => {
  //   expect(service).toBeTruthy();
  // }));
});
