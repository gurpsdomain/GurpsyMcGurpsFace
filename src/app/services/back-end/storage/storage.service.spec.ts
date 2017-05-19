/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {StorageService} from './storage.service';
import {ConfigStorageDelegate} from './delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from './delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonService} from '../json/json.service';

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

  it('should create a StorageService', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));
});
