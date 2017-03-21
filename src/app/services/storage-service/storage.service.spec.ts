/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {StorageService} from './storage.service';
import {ThemeStorageDelegate} from './delegates/theme-storage-delegate/theme-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonService} from '../json-service/json.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        JsonService,
        ThemeStorageDelegate,
        SheetStorageDelegate
      ]
    });
  });

  // it('should ...', inject([StorageService], (service: StorageService) => {
  //   expect(service).toBeTruthy();
  // }));
});
