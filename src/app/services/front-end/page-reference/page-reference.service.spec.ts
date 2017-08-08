import {TestBed, inject} from '@angular/core/testing';
import {PageReferenceService} from './page-reference.service';
import {SettingsService} from '../settings/settings.service';
import {SettingsStorageDelegate} from '../../back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {StorageService} from '../../back-end/storage/storage.service';
import {TemplateStorageDelegate} from '../../back-end/storage/delegates/template-storage-delegate/template-storage-delegate';
import {LoggingService} from '../../back-end/logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('PageReferenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        PageReferenceService,
        SettingsStorageDelegate,
        SettingsService,
        TemplateStorageDelegate,
        StorageService
      ]
    });
  });

  it('should be created', inject([PageReferenceService], (service: PageReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
