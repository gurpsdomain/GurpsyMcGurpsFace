/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {SettingsDialogComponent} from './settings-dialog.component';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

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
        SettingsStorageService,
        TemplateStorageService,
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
