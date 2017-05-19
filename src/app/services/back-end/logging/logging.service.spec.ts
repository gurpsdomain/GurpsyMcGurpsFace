import { TestBed, inject } from '@angular/core/testing';
import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggingService]
    });
  });

  it('should create a LoggingService', inject([LoggingService], (service: LoggingService) => {
    expect(service).toBeTruthy();
  }));
});
