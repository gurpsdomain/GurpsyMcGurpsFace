/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {ModelService} from './model.service';
import {Http, BaseRequestOptions} from '@angular/http';
import {ModelTransformerService} from '../../back-end/model-transformer/model-transformer.service';
import {LoggingService} from '../../back-end/logging/logging.service';
import {MockBackend} from '@angular/http/testing';
import {SheetStorageDelegate} from '../../back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {StorageService} from '../../back-end/storage/storage.service';
import {ConfigStorageDelegate} from '../../back-end/storage/delegates/config-storage-delegate/config-storage-delegate';
import {SettingsService} from '../settings/settings.service';
import {JsonService} from '../../back-end/json/json.service';

describe('ModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        ConfigStorageDelegate,
        Http,
        LoggingService,
        JsonService,
        MockBackend,
        ModelService,
        ModelTransformerService,
        SettingsService,
        SheetStorageDelegate,
        StorageService,
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should create a ModelService', inject([ModelService], (service: ModelService) => {
    expect(service).toBeTruthy();
  }));
});
