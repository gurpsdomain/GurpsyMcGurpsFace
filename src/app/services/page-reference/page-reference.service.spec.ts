import {inject, TestBed} from '@angular/core/testing';
import {PageReferenceService} from './page-reference.service';
import {SettingsService} from '../settings/settings.service';
import {SettingsRepository} from '../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../repositories/template/template.repository';
import {LoggingService} from '../logging/logging.service';
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
        SettingsRepository,
        SettingsService,
        TemplateRepository
      ]
    });
  });

  it('should be created', inject([PageReferenceService], (service: PageReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
