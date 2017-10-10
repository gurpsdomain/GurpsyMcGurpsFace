import {async, TestBed} from '@angular/core/testing';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {NgModule} from '@angular/core';
import {DescriptionUpdaterComponent} from './description-updater.component';

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
      declarations: [DescriptionUpdaterComponent],
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
