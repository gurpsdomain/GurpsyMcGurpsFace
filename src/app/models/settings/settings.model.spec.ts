import {TestBed} from '@angular/core/testing';
import {Settings} from './settings.model';


describe('Model Object Settings', () => {
  let settings: Settings;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => settings = new Settings());

  it('should be created', () => {
    expect(settings).toBeTruthy();
  });
})
