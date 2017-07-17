/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {AboutDialogComponent} from './about-dialog.component';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {MdDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {NgModule} from '@angular/core';

@NgModule({
  entryComponents: [
    AboutDialogComponent
  ],
})
export class TestModule {
}

describe('AboutDialogComponent', () => {
  let component: AboutDialogComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutDialogComponent
      ],
      imports: [
        TestModule,
        TranslateModule.forRoot(),
        GurpsyAngularModule,
        GurpsyMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(AboutDialogComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
