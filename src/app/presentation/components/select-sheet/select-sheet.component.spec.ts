import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SelectSheetComponent} from './select-sheet.component';
import {TranslateModule} from '@ngx-translate/core';
import {SelectSheetButtonComponent} from '../generic/select-sheet-button/select-sheet-button.component';
import {GurpsyMaterialModule} from '../../../modules/material.module';
import {Template} from '../../../models/template/template.model';
import {SheetService} from '../../../services/sheet/sheet.service';
import {LoggingService} from '../../../services/logging/logging.service';
import {TemplateRepository} from '../../../repositories/template/template.repository';

describe('SelectSheetComponent', () => {
  let component: SelectSheetComponent;
  let fixture: ComponentFixture<SelectSheetComponent>;

  let sheetService: SheetService;
  const templates: Template[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        GurpsyMaterialModule
      ],
      declarations: [
        SelectSheetComponent,
        SelectSheetButtonComponent
      ],
      providers: [
        LoggingService,
        SheetService,
        TemplateRepository
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSheetComponent);
    component = fixture.componentInstance;

    sheetService = TestBed.get(SheetService);

    this.templates = [new Template(), new Template()];

    spyOn(sheetService, 'getTemplates')
      .and.returnValue(Promise.resolve(templates));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the templates set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.templates).toBe(templates);
  }));
});
