import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NewSheetComponent} from './new-sheet.component';
import {ModelFactoryService} from '../../../../factories/model/model-factory.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';

describe('NewSheetComponent', () => {
  let component: NewSheetComponent;
  let fixture: ComponentFixture<NewSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot(),
        FormsModule
      ],
      declarations: [NewSheetComponent],
      providers: [ModelFactoryService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
