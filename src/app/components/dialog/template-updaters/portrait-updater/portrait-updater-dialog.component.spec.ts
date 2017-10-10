import {async, TestBed} from '@angular/core/testing';
import {PortraitUpdaterDialogComponent} from './portrait-updater-dialog.component';
import {ImageCropperComponent} from 'ng2-img-cropper';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {MatDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {NgModule} from '@angular/core';

@NgModule({
  entryComponents: [
    PortraitUpdaterDialogComponent
  ],
})
export class TestModule {
}

describe('PortraitUpdaterDialogComponent', () => {
  let component: PortraitUpdaterDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageCropperComponent,
        PortraitUpdaterDialogComponent],
      imports: [
        GurpsyAngularModule,
        GurpsyMaterialModule,
        TestModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    const dialogRef = dialog.open(PortraitUpdaterDialogComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
