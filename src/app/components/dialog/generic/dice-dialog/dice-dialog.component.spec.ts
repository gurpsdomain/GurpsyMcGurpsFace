/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {DiceDialogComponent} from './dice-dialog.component';
import {MatDialog} from '@angular/material';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {TranslateModule} from '@ngx-translate/core';
import {NgModule} from '@angular/core';

@NgModule({
  entryComponents: [
    DiceDialogComponent
  ],
})
export class TestModule {
}

describe('DiceDialogComponent', () => {
  let component: DiceDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiceDialogComponent],
      imports: [
        TestModule,
        GurpsyAngularModule,
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    const dialogRef = dialog.open(DiceDialogComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
