import {async, TestBed} from '@angular/core/testing';
import {TemplateFactoryService} from '../../../../factories/model/template-factory.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MdDialog} from '@angular/material';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {NgModule} from '@angular/core';
import {IdentityUpdaterComponent} from './identity-updater.component';

@NgModule({
  entryComponents: [
    IdentityUpdaterComponent
  ],
})
export class TestModule {
}

describe('IdentityUpdaterComponent', () => {
  let component: IdentityUpdaterComponent;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityUpdaterComponent],
      imports: [
        GurpsyMaterialModule,
        GurpsyAngularModule,
        TranslateModule.forRoot(),
        FormsModule,
        TestModule
      ],
      providers: [TemplateFactoryService],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(IdentityUpdaterComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
