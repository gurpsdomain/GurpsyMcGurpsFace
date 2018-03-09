import {async, TestBed} from '@angular/core/testing';
import {PortraitUpdaterDialogComponent} from './portrait-updater-dialog.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatDialog} from '@angular/material';
import {NgModule} from '@angular/core';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {ImageCropperComponent} from 'ngx-img-cropper';

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
