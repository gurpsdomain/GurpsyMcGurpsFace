/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {SheetBodyService} from './sheet-body.service';
import {SettingsService} from '../settings/settings.service';
import {StorageService} from '../../back-end/storage/storage.service';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {ConfigStorageDelegate} from '../../back-end/storage/delegates/config-storage-delegate/config-storage-delegate';
import {JsonService} from '../../back-end/json/json.service';

describe('SheetBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigStorageDelegate,
        JsonService,
        SettingsService,
        SheetBodyService,
        SheetStorageDelegate,
        StorageService
      ]
    });
  });

  it('should create a SheetBodyService', inject([SheetBodyService], (service: SheetBodyService) => {
    expect(service).toBeTruthy();
  }));
});
