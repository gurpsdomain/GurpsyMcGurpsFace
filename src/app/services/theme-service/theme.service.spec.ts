/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import {StorageService} from '../storage-service/storage.service';
import {ConfigurationService} from '../configuration-service/configuration.service';

describe('ThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        StorageService,
        ConfigurationService
      ]
    });
  });

  // it('should ...', inject([ThemeService], (service: ThemeService) => {
  //   expect(service).toBeTruthy();
  // }));
});
