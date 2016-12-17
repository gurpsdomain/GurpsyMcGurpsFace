/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemesRepositoryService } from './themes.service';

describe('ThemesRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemesRepositoryService]
    });
  });

  it('should ...', inject([ThemesRepositoryService], (service: ThemesRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
