/* tslint:disable:no-unused-variable */
import {IdentityComponent} from './identity.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/model-service/model.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {SettingsService} from '../../../../services/settings-service/settings.service';

describe('IdentityComponent', function () {
  let de: DebugElement;
  let comp: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdentityComponent
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
        ModelService,
        JsonService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create a reusable Identity Component', () => expect(comp).toBeDefined());
});
