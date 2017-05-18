/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {SettingsService} from './settings.service';
import {StorageService} from '../../back-end/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../back-end/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../back-end/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonService} from '../../back-end/json-service/json.service';

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SettingsService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
        JsonService
      ]
    });
  });

  // it('should ...', inject([SettingsService], (service: SettingsService) => {
  //   expect(service).toBeTruthy();
  // }));
});
