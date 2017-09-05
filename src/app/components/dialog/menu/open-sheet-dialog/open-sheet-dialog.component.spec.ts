/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {OpenSheetDialogComponent} from './open-sheet-dialog.component';
import {FileInputComponent} from '../../../generic/file-input/file-input.component';
import {MdDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {NgModule} from '@angular/core';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';
import {SelectSheetButtonComponent} from '../../../generic/select-sheet-button/select-sheet-button.component';

@NgModule({
  entryComponents: [
    OpenSheetDialogComponent
  ],
})
export class TestModule {
}

describe('OpenSheetDialogComponent', () => {
  let component: OpenSheetDialogComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OpenSheetDialogComponent,
        SelectSheetButtonComponent,
        FileInputComponent
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
        TemplateStorageService,
        SettingsStorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(OpenSheetDialogComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
