import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectSheetComponent} from './select-sheet.component';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {SheetService} from '../../services/front-end/sheet/sheet.service';
import {TemplateStorageService} from '../../services/back-end/template-storage/template-storage.service';
import {LoggingService} from '../../services/back-end/logging/logging.service';

describe('SelectSheetComponent', () => {
  let component: SelectSheetComponent;
  let fixture: ComponentFixture<SelectSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        GurpsyMaterialModule
      ],
      declarations: [SelectSheetComponent],
      providers: [
        LoggingService,
        SheetService,
        TemplateStorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
