/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsRepositoryService } from './languages.service';

describe('SettingsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsRepositoryService]
    });
  });

  it('should ...', inject([SettingsRepositoryService], (service: SettingsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
