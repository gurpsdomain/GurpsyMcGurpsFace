/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {AboutDialogComponent} from './about-dialog.component';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../../gurpsy-material.module';
import {MdDialogRef, MdDialog} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [AboutDialogComponent],
  entryComponents: [AboutDialogComponent],
  exports: [AboutDialogComponent]
})
class TestAboutDialogModule {}

describe('AboutDialogComponent', () => {
  let component: AboutDialogComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutDialogComponent
      ],
      imports: [
        TestAboutDialogModule,
        TranslateModule.forRoot(),
        GurpsyMaterialModule
      ],
      providers: [
        MdDialogRef
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(AboutDialogComponent);

    component = dialogRef.componentInstance;
  });

  // it('should create an About Dialog Component', () => {
  //   expect(component).toBeTruthy();
  // });
});
