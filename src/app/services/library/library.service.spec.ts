import {inject, TestBed} from '@angular/core/testing';

import {LibraryService} from './library.service';
import {GurpsyAngularModule} from '../../modules/angular.module';

describe('LibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GurpsyAngularModule],
      providers: [LibraryService]
    });
  });

  it('should be created', inject([LibraryService], (service: LibraryService) => {
    expect(service).toBeTruthy();
  }));
});
