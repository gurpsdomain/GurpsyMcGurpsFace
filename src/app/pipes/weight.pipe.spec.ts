import {TestBed, inject} from '@angular/core/testing';
import {WeightPipe} from './weight.pipe';
import {SettingsService} from '../services/front-end/settings/settings.service';
import {StorageService} from '../services/back-end/storage/storage.service';
import {SettingsStorageDelegate} from '../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../services/back-end/logging/logging.service';

describe('WeightPipe', () => {
  let pipe;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoggingService,
      SettingsService,
      StorageService,
      SettingsStorageDelegate,
      SheetStorageDelegate,
      WeightPipe
    ],
    imports: [
      TranslateModule.forRoot()
    ],
  }));

  beforeEach(inject([WeightPipe], p => {
    pipe = p;
  }));

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should work with an empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('should default to pounds', () => {
    expect(pipe.transform(37)).toEqual('37 lb');
  });

  it('should return an empty string in case of an undefined input', () =>{
    expect(pipe.transform()).toEqual('');
  })
})
