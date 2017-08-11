import {inject, TestBed} from '@angular/core/testing';
import {WeightPipe} from './weight.pipe';
import {SettingsService} from '../services/front-end/settings/settings.service';
import {SettingsStorageService} from '../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../services/back-end/template-storage/template-storage.service';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../services/back-end/logging/logging.service';

describe('WeightPipe', () => {
  let pipe;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoggingService,
      SettingsService,
      SettingsStorageService,
      TemplateStorageService,
      WeightPipe
    ],
    imports: [
      TranslateModule.forRoot()
    ],
  }));

  beforeEach(inject([WeightPipe], p => {
    pipe = p;
  }));

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should work with an empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('should default to pounds', () => {
    expect(pipe.transform(37)).toEqual('37 lb');
  });

  it('should return an empty string in case of an undefined input', () => {
    expect(pipe.transform()).toEqual('');
  })
})
