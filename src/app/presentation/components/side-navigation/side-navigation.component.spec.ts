/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {SideNavigationComponent} from './side-navigation.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SheetService} from '../../../services/sheet/sheet.service';
import {SettingsService} from '../../../services/settings/settings.service';
import {SettingsRepository} from '../../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../../repositories/template/template.repository';
import {LoggingService} from '../../../services/logging/logging.service';
import {GurpsyMaterialModule} from '../../../modules/material.module';
import {SheetBodyService} from '../../../services/sheet-body/sheet-body.service';

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
        GurpsyMaterialModule
      ],
      providers: [
        SettingsRepository,
        LoggingService,
        SheetService,
        SettingsService,
        SettingsRepository,
        SheetBodyService,
        TemplateRepository
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
