/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {SideNavigationComponent} from './side-navigation.component';
import {SheetBodyService} from '../../services/front-end/sheet-body/sheet-body.service';
import {SettingsService} from '../../services/front-end/settings/settings.service';
import {StorageService} from '../../services/back-end/storage/storage.service';
import {SettingsStorageDelegate} from '../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {TemplateStorageDelegate} from '../../services/back-end/storage/delegates/template-storage-delegate/template-storage-delegate';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {LoggingService} from '../../services/back-end/logging/logging.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SheetService} from '../../services/front-end/sheet/sheet.service';

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
        SheetService,
        SettingsService,
        SettingsStorageDelegate,
        SheetBodyService,
        TemplateStorageDelegate,
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
