import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SelectSheetComponent} from './select-sheet.component';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {SheetService} from '../../services/front-end/sheet/sheet.service';
import {TemplateStorageService} from '../../services/back-end/template-storage/template-storage.service';
import {LoggingService} from '../../services/back-end/logging/logging.service';
import {TemplateDM} from '../../models/sheet/template/template.model';

describe('SelectSheetComponent', () => {
  let component: SelectSheetComponent;
  let fixture: ComponentFixture<SelectSheetComponent>;

  let sheetService: SheetService;
  const templates: TemplateDM[] = [];

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

    sheetService = TestBed.get(SheetService);

    this.templates = [new TemplateDM(), new TemplateDM()];

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
