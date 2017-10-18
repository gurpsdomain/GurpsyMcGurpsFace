/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {SheetBodyService} from './sheet-body.service';
import {SettingsService} from '../settings/settings.service';
import {TemplateRepository} from '../../repositories/template/template.repository';
import {SettingsRepository} from '../../repositories/settings/settings.repository';
import {LoggingService} from '../logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('SheetBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SettingsRepository,
        SettingsService,
        SheetBodyService,
        TemplateRepository
      ]
    });
  });

  it('should be created', inject([SheetBodyService], (service: SheetBodyService) => {
    expect(service).toBeTruthy();
  }));
});
