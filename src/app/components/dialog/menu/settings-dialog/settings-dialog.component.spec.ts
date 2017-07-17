/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {SettingsDialogComponent} from './settings-dialog.component';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {MdDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {BookConfigurationComponent} from '../../../generic/book-configuration/book-configuration.component';
import {BooksConfigurationComponent} from '../../../generic/books-configuration/books-configuration.component';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {PageReferenceService} from '../../../../services/front-end/page-reference/page-reference.service';
import {NgModule} from '@angular/core';

@NgModule({
  entryComponents: [
    SettingsDialogComponent
  ],
})
export class TestModule {
}

describe('SettingsDialogComponent', () => {
  let component: SettingsDialogComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookConfigurationComponent,
        BooksConfigurationComponent,
        SettingsDialogComponent
      ],
      imports: [
        GurpsyAngularModule,
        GurpsyMaterialModule,
        TestModule,
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        PageReferenceService,
        SettingsService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(SettingsDialogComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
