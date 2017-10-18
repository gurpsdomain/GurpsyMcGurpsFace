/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {SettingsService} from './settings.service';
import {SettingsRepository} from '../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../repositories/template/template.repository';
import {LoggingService} from '../logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SettingsService,
        SettingsRepository,
        TemplateRepository
      ]
    });
  });

  it('should be created', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
