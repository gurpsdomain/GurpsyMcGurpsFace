import {async, TestBed} from '@angular/core/testing';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {NgModule} from '@angular/core';
import {PlayerInformationUpdaterComponent} from './player-information-updater.component';

@NgModule({
  entryComponents: [
    PlayerInformationUpdaterComponent
  ],
})
export class TestModule {
}

describe('PlayerInformationUpdaterComponent', () => {
  let component: PlayerInformationUpdaterComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInformationUpdaterComponent],
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
    const dialogRef = dialog.open(PlayerInformationUpdaterComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
