/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {SettingsStorageService} from './settings-storage.service';
import {LoggingService} from '../logging/logging.service';

describe('SettingsStorageService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggingService,
        SettingsStorageService
      ]
    });
  });

  it('should be created', inject([SettingsStorageService], (service: SettingsStorageService) => {
    expect(service).toBeTruthy();
  }));
});
