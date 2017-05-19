/* tslint:disable:no-unused-variable */
import {PortraitComponent} from './portrait.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {JsonService} from '../../../../services/back-end/json/json.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {ModelTransformerService} from '../../../../services/back-end/model-transformer/model-transformer.service';

////////  SPECS  /////////////
describe('PortraitComponent', function () {
  let de: DebugElement;
  let comp: PortraitComponent;
  let fixture: ComponentFixture<PortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PortraitComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        SettingsService,
        LoggingService,
        ModelService,
        ModelTransformerService,
        JsonService,
        StorageService,
        SettingsStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create a reuable Portrait Component', () => expect(comp).toBeDefined());
});
