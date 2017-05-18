/* tslint:disable:no-unused-variable */
import {PointsComponent} from './points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/front-end/model-service/model.service';
import {JsonService} from '../../../../services/back-end/json-service/json.service';
import {StorageService} from '../../../../services/back-end/storage-service/storage.service';
// tslint:disable-next-line max-line-length
import {ConfigStorageDelegate} from '../../../../services/back-end/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {SettingsService} from '../../../../services/front-end/settings-service/settings.service';

////////  SPECS  /////////////
describe('PointsComponent', function () {
  let de: DebugElement;
  let comp: PointsComponent;
  let fixture: ComponentFixture<PointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PointsComponent
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
    fixture = TestBed.createComponent(PointsComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create a reusable Points Component', () => expect(comp).toBeDefined());
});
