import {TestBed, inject} from '@angular/core/testing';
import {ModelTransformerService} from './model-transformer.service';
import {SettingsService} from '../../front-end/settings/settings.service';
import {StorageService} from '../storage/storage.service';
import {SettingsStorageDelegate} from '../storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {TranslateModule} from '@ngx-translate/core';

describe('ModelTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelTransformerService,
        SettingsService,
        StorageService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
      ]
    });
  });

  it('should be created', inject([ModelTransformerService], (service: ModelTransformerService) => {
    expect(service).toBeTruthy();
  }));
});
