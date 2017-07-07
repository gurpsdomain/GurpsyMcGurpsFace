import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AvatarComponent} from './avatar.component';
import {ModelService} from '../../../services/front-end/model/model.service';
import {ModelTransformerService} from '../../../services/back-end/model-transformer/model-transformer.service';
import {SheetStorageDelegate} from '../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {SettingsStorageDelegate} from '../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {LoggingService} from '../../../services/back-end/logging/logging.service';
import {StorageService} from '../../../services/back-end/storage/storage.service';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent],
      providers: [
        BaseRequestOptions,
        SettingsStorageDelegate,
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        ModelTransformerService,
        LoggingService,
        ModelService,
        SettingsService,
        StorageService,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created a generic Avatar component', () => {
    expect(component).toBeTruthy();
  });
});
