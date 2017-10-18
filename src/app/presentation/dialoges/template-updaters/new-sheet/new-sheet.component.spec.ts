import {async, TestBed} from '@angular/core/testing';
import {NewSheetComponent} from './new-sheet.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {NgModule} from '@angular/core';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {GurpsyAngularModule} from '../../../../modules/angular.module';

@NgModule({
  entryComponents: [
    NewSheetComponent
  ],
})
export class TestModule {
}

describe('NewSheetComponent', () => {
  let component: NewSheetComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewSheetComponent],
      imports: [
        GurpsyMaterialModule,
        GurpsyAngularModule,
        TranslateModule.forRoot(),
        FormsModule,
        TestModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    const dialogRef = dialog.open(NewSheetComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
