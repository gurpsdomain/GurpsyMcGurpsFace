import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FatigueHitComponent} from './fatigue-hit.component';
import {JsonService} from '../../../../services/back-end/json/json.service';
import {ModelService} from '../../../../services/front-end/model/model.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {TranslateModule} from '@ngx-translate/core';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {ModelTransformerService} from '../../../../services/back-end/model-transformer/model-transformer.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';

describe('FatigueHitComponent', () => {
  let component: FatigueHitComponent;
  let fixture: ComponentFixture<FatigueHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FatigueHitComponent],
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
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatigueHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create  a reusable Fatigue/Hit Component', () => {
    expect(component).toBeTruthy();
  });
});
