/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {OpenSheetDialogComponent} from './open-sheet-dialog.component';
import {FileFormComponent} from '../../../components/form/file/file.form.component';
import {MatDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../../../services/logging/logging.service';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {SettingsRepository} from '../../../../repositories/settings/settings.repository';
import {NgModule} from '@angular/core';
import {SheetService} from '../../../../services/sheet/sheet.service';
import {SelectSheetButtonComponent} from '../../../components/generic/select-sheet-button/select-sheet-button.component';

@NgModule({
  entryComponents: [
    OpenSheetDialogComponent
  ],
})
export class TestModule {
}

describe('OpenSheetDialogComponent', () => {
  let component: OpenSheetDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OpenSheetDialogComponent,
        SelectSheetButtonComponent,
        FileFormComponent
      ],
      imports: [
        GurpsyAngularModule,
        GurpsyMaterialModule,
        TestModule,
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SheetService,
        TemplateRepository,
        SettingsRepository
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    const dialogRef = dialog.open(OpenSheetDialogComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
