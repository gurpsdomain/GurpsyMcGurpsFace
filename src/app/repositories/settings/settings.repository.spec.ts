/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {SettingsRepository} from './settings.repository';
import {LoggingService} from '../../services/logging/logging.service';

describe('SettingsRepository', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggingService,
        SettingsRepository
      ]
    });
  });

  it('should be created', inject([SettingsRepository], (service: SettingsRepository) => {
    expect(service).toBeTruthy();
  }));
});
