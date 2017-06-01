import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EncumbranceComponent} from './encumbrance.component';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {ModelTransformerService} from '../../../../services/back-end/model-transformer/model-transformer.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';

describe('EncumbranceComponent', () => {
  let component: EncumbranceComponent;
  let fixture: ComponentFixture<EncumbranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EncumbranceComponent],
      imports: [
        HttpModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        SettingsService,
        MockBackend,
        BaseRequestOptions,
        LoggingService,
        ModelService,
        ModelTransformerService,
        StorageService,
        SettingsStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncumbranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an Reusable Encumbrance Component', () => {
    expect(component).toBeTruthy();
  });
});
