import {async, TestBed} from '@angular/core/testing';
import {NewSheetComponent} from './new-sheet.component';
import {ModelFactoryService} from '../../../../factories/model/model-factory.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MdDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {NgModule} from '@angular/core';

@NgModule({
  entryComponents: [
    NewSheetComponent
  ],
})
export class TestModule {
}

describe('NewSheetComponent', () => {
  let component: NewSheetComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewSheetComponent],
      imports: [
        GurpsyMaterialModule,
        GurpsyAngularModule,
        TranslateModule.forRoot(),
        FormsModule,
        TestModule
      ],
      providers: [ModelFactoryService],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(NewSheetComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
