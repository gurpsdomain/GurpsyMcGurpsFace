/* tslint:disable:no-unused-variable */
import {TestBed} from '@angular/core/testing';
import {ThemeService} from './theme.service';
import {StorageService} from '../storage-service/storage.service';
import {ThemeStorageDelegate} from '../storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from '../storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {SheetStorageDelegate} from '../storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonService} from '../json-service/json.service';

describe('ThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        StorageService,
        ThemeStorageDelegate,
        LanguageStorageDelegate,
        SheetStorageDelegate,
        JsonService
      ]
    });
  });

  // it('should ...', inject([ThemeService], (service: ThemeService) => {
  //   expect(service).toBeTruthy();
  // }));
});
