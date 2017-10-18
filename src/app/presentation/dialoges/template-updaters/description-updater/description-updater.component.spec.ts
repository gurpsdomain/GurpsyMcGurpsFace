import {async, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {NgModule} from '@angular/core';
import {DescriptionUpdaterComponent} from './description-updater.component';
import {WeightFormComponent} from '../../../components/form/weight/weight.form.component';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {GurpsyAngularModule} from '../../../../modules/angular.module';

@NgModule({
  entryComponents: [
    DescriptionUpdaterComponent
  ],
})
export class TestModule {
}

describe('DescriptionUpdaterComponent', () => {
  let component: DescriptionUpdaterComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DescriptionUpdaterComponent,
        WeightFormComponent
      ],
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
    const dialogRef = dialog.open(DescriptionUpdaterComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
