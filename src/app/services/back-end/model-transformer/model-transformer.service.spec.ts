import {TestBed, inject} from '@angular/core/testing';
import {ModelTransformerService} from './model-transformer.service';
import {Http, BaseRequestOptions} from '@angular/http';
import {SettingsService} from '../../front-end/settings/settings.service';
import {MockBackend} from '@angular/http/testing';
import {StorageService} from '../storage/storage.service';
import {ConfigStorageDelegate} from '../storage/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonService} from '../json/json.service';

describe('ModelTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        Http,
        JsonService,
        MockBackend,
        ModelTransformerService,
        SettingsService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should be created a ModelTransformerService', inject([ModelTransformerService], (service: ModelTransformerService) => {
    expect(service).toBeTruthy();
  }));
});
