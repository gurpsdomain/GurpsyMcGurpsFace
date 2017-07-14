import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoSheetLoadedComponent} from './no-sheet-loaded.component';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../modules/material.module';

describe('NoSheetLoadedComponent', () => {
  let component: NoSheetLoadedComponent;
  let fixture: ComponentFixture<NoSheetLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        GurpsyMaterialModule
      ],
      declarations: [NoSheetLoadedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSheetLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
