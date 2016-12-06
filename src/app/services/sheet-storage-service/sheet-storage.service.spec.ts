/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SheetStorageService } from './sheet-storage.service';

describe('SheetStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetStorageService]
    });
  });

  it('should ...', inject([SheetStorageService], (service: SheetStorageService) => {
    expect(service).toBeTruthy();
  }));
});
