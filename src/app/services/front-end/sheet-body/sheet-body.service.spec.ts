/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {SheetBodyService} from './sheet-body.service';
import {SettingsService} from '../settings/settings.service';
import {StorageService} from '../../back-end/storage/storage.service';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {JsonService} from '../../back-end/json/json.service';

describe('SheetBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SettingsStorageDelegate,
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