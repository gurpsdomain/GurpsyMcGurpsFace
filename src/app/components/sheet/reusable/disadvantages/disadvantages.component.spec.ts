/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DisadvantagesComponent} from './disadvantages.component';
import {ModelService} from '../../../../services/front-end/model-service/model.service';
import {JsonService} from '../../../../services/back-end/json-service/json.service';
import {StorageService} from '../../../../services/back-end/storage-service/storage.service';
// tslint:disable-next-line max-line-length
import {ConfigStorageDelegate} from '../../../../services/back-end/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {TranslateModule} from '@ngx-translate/core';
import {PageReferenceComponent} from '../../../generic/page-reference/page-reference.component';
import {ConnectionBackend, Http, BaseRequestOptions, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {SettingsService} from '../../../../services/front-end/settings-service/settings.service';

describe('DisadvantagesComponent', () => {
  let component: DisadvantagesComponent;
  let fixture: ComponentFixture<DisadvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisadvantagesComponent,
        PageReferenceComponent
      ],
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
        MockBackend,
        BaseRequestOptions,
        SettingsService,
        ConfigStorageDelegate,
        ConnectionBackend,
        Http,
        ModelService,
        JsonService,
        StorageService,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisadvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a reusable Disadvantage Component', () => {
    expect(component).toBeTruthy();
  });
});
