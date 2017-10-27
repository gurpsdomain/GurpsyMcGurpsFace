import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {WeightDisplayComponent} from './weight-display.component';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../../../services/logging/logging.service';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {SheetService} from '../../../../services/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';
import {GurpsyMaterialModule} from '../../../../modules/material.module';

describe('WeightDisplayComponent', () => {
  let component: WeightDisplayComponent;
  let fixture: ComponentFixture<WeightDisplayComponent>;

  let sheetService: SheetService;
  let sheet: Sheet;
  let template: SheetTemplate;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeightDisplayComponent
      ],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        TemplateRepository,
        SheetService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightDisplayComponent);
    component = fixture.componentInstance;

    sheetService = TestBed.get(SheetService);

    template = new SheetTemplate();
    sheet = new Sheet(template);

    spyOn(sheetService, 'getSheet')
      .and.returnValue(Promise.resolve(sheet));
    spyOn(sheetService, 'getTemplate')
      .and.returnValue(Promise.resolve(template));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  })

  it('should have a sheet set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.sheet).toBe(sheet);
  }));

  it('should have a template set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.template).toBe(template);
  }));
});
