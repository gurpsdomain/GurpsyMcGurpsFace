/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {SideNavigationComponent} from './side-navigation.component';
import {SheetBodyService} from '../../services/front-end/sheet-body/sheet-body.service';
import {SettingsService} from '../../services/front-end/settings/settings.service';
import {SettingsStorageService} from '../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../services/back-end/template-storage/template-storage.service';
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
        SettingsStorageService,
        LoggingService,
        SheetService,
        SettingsService,
        SettingsStorageService,
        SheetBodyService,
        TemplateStorageService
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
