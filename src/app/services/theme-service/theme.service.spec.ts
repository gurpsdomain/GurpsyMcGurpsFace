/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import {StorageService} from '../storage-service/storage.service';

describe('ThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        StorageService
      ]
    });
  });

  // it('should ...', inject([ThemeService], (service: ThemeService) => {
  //   expect(service).toBeTruthy();
  // }));
});
