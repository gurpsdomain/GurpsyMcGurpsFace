/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {SideNavigationComponent} from './side-navigation.component';
import {SheetBodyService} from '../../services/front-end/sheet-body/sheet-body.service';
import {SettingsService} from '../../services/front-end/settings/settings.service';
import {StorageService} from '../../services/back-end/storage/storage.service';
import {SettingsStorageDelegate} from '../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {LoggingService} from '../../services/back-end/logging/logging.service';
import {ModelService} from '../../services/front-end/model/model.service';
import {ModelTransformerService} from '../../services/back-end/model-transformer/model-transformer.service';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';

describe('SideNavigationComponent', () => {
  let component: SideNavigationComponent;
  let fixture: ComponentFixture<SideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideNavigationComponent
      ],
      imports: [
        FormsModule,
        TranslateModule.forRoot(),
        GurpsyMaterialModule],
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
        LoggingService,
        ModelService,
        ModelTransformerService,
        SettingsService,
        SettingsStorageDelegate,
        SheetBodyService,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create a SideNavigationComponent', () => {
  //   expect(component).toBeTruthy();
  // });
});
