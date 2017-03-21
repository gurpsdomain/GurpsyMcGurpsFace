/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {StorageService} from './storage.service';
import {ConfigStorageDelegate} from './delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonService} from '../json-service/json.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        JsonService,
        ConfigStorageDelegate,
        SheetStorageDelegate
      ]
    });
  });

  // it('should ...', inject([StorageService], (service: StorageService) => {
  //   expect(service).toBeTruthy();
  // }));
});
