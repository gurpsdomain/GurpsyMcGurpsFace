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
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';

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
        SettingsStorageDelegate,
        LoggingService,
        ModelService,
        SettingsService,
        SettingsStorageDelegate,
        SheetBodyService,
        SheetStorageDelegate,
        StorageService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
