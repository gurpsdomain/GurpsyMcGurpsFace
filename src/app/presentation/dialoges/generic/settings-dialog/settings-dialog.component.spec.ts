/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {SettingsDialogComponent} from './settings-dialog.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatDialog} from '@angular/material';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {SettingsService} from '../../../../services/settings/settings.service';
import {SettingsRepository} from '../../../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {LoggingService} from '../../../../services/logging/logging.service';

@NgModule({
  entryComponents: [
    SettingsDialogComponent
  ],
})
export class TestModule {
}

describe('SettingsDialogComponent', () => {
  let component: SettingsDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SettingsDialogComponent
      ],
      imports: [
        GurpsyAngularModule,
        GurpsyMaterialModule,
        TestModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        SettingsRepository,
        TemplateRepository,
        LoggingService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    const dialogRef = dialog.open(SettingsDialogComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
