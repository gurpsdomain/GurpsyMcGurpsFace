/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {OpenSheetDialogComponent} from './open-sheet-dialog.component';
import {FileInputComponent} from '../../../generic/file-input/file-input.component';
import {MdDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {TemplateStorageService} from '../../../../services/back-end/storage/delegates/template-storage/template-storage.service';
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {NgModule} from '@angular/core';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';

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
        StorageService,
        TemplateStorageService,
        SettingsStorageDelegate
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
