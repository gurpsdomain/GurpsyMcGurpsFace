import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LiftingMovingComponent} from './lifting-moving.component';
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

describe('LiftingMovingComponent', () => {
  let component: LiftingMovingComponent;
  let fixture: ComponentFixture<LiftingMovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiftingMovingComponent],
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
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftingMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an Reusable Lifting/Moving Component', () => {
    expect(component).toBeTruthy();
  });
})
;
