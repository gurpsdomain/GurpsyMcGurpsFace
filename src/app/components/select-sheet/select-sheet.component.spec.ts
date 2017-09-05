import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SelectSheetComponent} from './select-sheet.component';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {SheetService} from '../../services/front-end/sheet/sheet.service';
import {TemplateStorageService} from '../../services/back-end/template-storage/template-storage.service';
import {LoggingService} from '../../services/back-end/logging/logging.service';
import {SheetTemplate} from '../../models/sheet-template/sheet-template.model';
import {SelectSheetButtonComponent} from '../generic/select-sheet-button/select-sheet-button.component';

describe('SelectSheetComponent', () => {
  let component: SelectSheetComponent;
  let fixture: ComponentFixture<SelectSheetComponent>;

  let sheetService: SheetService;
  const templates: SheetTemplate[] = [];

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
        TemplateStorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSheetComponent);
    component = fixture.componentInstance;

    sheetService = TestBed.get(SheetService);

    this.templates = [new SheetTemplate(), new SheetTemplate()];

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
