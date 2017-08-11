import {inject, TestBed} from '@angular/core/testing';
import {PageReferenceService} from './page-reference.service';
import {SettingsService} from '../settings/settings.service';
import {SettingsStorageService} from '../../back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../back-end/template-storage/template-storage.service';
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
        SettingsStorageService,
        SettingsService,
        TemplateStorageService
      ]
    });
  });

  it('should be created', inject([PageReferenceService], (service: PageReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
