/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {SettingsService} from './settings.service';
import {SettingsStorageService} from '../../back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../back-end/template-storage/template-storage.service';
import {LoggingService} from '../../back-end/logging/logging.service';
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
        SettingsStorageService,
        TemplateStorageService
      ]
    });
  });

  it('should be created', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});
