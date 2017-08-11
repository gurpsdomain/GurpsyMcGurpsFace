/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {SheetBodyService} from './sheet-body.service';
import {SettingsService} from '../settings/settings.service';
import {TemplateStorageService} from '../../back-end/template-storage/template-storage.service';
import {SettingsStorageService} from '../../back-end/settings-storage/settings-storage.service';
import {LoggingService} from '../../back-end/logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('SheetBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SettingsStorageService,
        SettingsService,
        SheetBodyService,
        TemplateStorageService
      ]
    });
  });

  it('should be created', inject([SheetBodyService], (service: SheetBodyService) => {
    expect(service).toBeTruthy();
  }));
});
