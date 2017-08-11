/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {SettingsDialogComponent} from './settings-dialog.component';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {MdDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {BookConfigurationComponent} from '../../../generic/book-configuration/book-configuration.component';
import {BooksConfigurationComponent} from '../../../generic/books-configuration/books-configuration.component';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {PageReferenceService} from '../../../../services/front-end/page-reference/page-reference.service';
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
        SettingsService,
        SettingsStorageService,
        TemplateStorageService,
        LoggingService,
        PageReferenceService,
      ],
      schemas: [
        NO_ERRORS_SCHEMA
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
