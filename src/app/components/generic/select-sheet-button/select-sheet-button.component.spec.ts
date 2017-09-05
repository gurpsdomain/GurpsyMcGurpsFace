import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectSheetButtonComponent} from './select-sheet-button.component';
import {GurpsyMaterialModule} from '../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';

describe('SelectSheetButtonComponent', () => {
  let component: SelectSheetButtonComponent;
  let fixture: ComponentFixture<SelectSheetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectSheetButtonComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        GurpsyMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSheetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
