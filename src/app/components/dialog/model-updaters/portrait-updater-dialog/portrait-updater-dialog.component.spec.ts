import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PortraitUpdaterDialogComponent} from './portrait-updater-dialog.component';
import {ImageCropperComponent} from 'ng2-img-cropper';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {MdDialogRef} from '@angular/material';

describe('PortraitUpdaterDialogComponent', () => {
  let component: PortraitUpdaterDialogComponent;
  let fixture: ComponentFixture<PortraitUpdaterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageCropperComponent,
        PortraitUpdaterDialogComponent],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitUpdaterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
