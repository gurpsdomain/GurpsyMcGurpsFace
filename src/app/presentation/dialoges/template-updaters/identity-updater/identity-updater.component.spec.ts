import {async, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {NgModule} from '@angular/core';
import {IdentityUpdaterComponent} from './identity-updater.component';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {GurpsyAngularModule} from '../../../../modules/angular.module';

@NgModule({
  entryComponents: [
    IdentityUpdaterComponent
  ],
})
export class TestModule {
}

describe('IdentityUpdaterComponent', () => {
  let component: IdentityUpdaterComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityUpdaterComponent],
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
    const dialogRef = dialog.open(IdentityUpdaterComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
