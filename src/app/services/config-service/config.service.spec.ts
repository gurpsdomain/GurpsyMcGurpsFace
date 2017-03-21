/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {ConfigService} from './config.service';
import {StorageService} from '../storage-service/storage.service';
import {ConfigStorageDelegate} from '../storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonService} from '../json-service/json.service';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
        JsonService
      ]
    });
  });

  // it('should ...', inject([ConfigService], (service: ConfigService) => {
  //   expect(service).toBeTruthy();
  // }));
});
