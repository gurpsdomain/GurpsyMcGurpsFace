/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemesService } from './themes.service';

describe('ThemesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemesService]
    });
  });

  it('should ...', inject([ThemesService], (service: ThemesService) => {
    expect(service).toBeTruthy();
  }));
});
