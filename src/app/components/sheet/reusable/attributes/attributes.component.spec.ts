/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AttributesComponent} from './attributes.component';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {TranslateModule} from '@ngx-translate/core';
import {ConnectionBackend, Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {ModelTransformerService} from '../../../../services/back-end/model-transformer/model-transformer.service';

describe('AttributesComponent', () => {
  let component: AttributesComponent;
  let fixture: ComponentFixture<AttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttributesComponent],
      providers: [
        BaseRequestOptions,
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        ModelTransformerService,
        SettingsService,
        SettingsStorageDelegate,
        ConnectionBackend,
        Http,
        LoggingService,
        ModelService,
        SheetStorageDelegate,
        StorageService
      ],
      imports: [
        HttpModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
