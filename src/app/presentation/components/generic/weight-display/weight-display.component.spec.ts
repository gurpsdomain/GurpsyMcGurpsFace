import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {WeightDisplayComponent} from './weight-display.component';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../../../services/logging/logging.service';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {SheetService} from '../../../../services/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {Unit} from '../../../../models/sheet-template/metadata/enums/unit';

describe('WeightDisplayComponent', () => {
  let component: WeightDisplayComponent;
  let fixture: ComponentFixture<WeightDisplayComponent>;

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
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  })

  describe('should have a', () => {

    let sheetService: SheetService;
    let sheet: Sheet;
    let template: SheetTemplate;

    beforeEach(() => {
      sheetService = TestBed.get(SheetService);

      template = new SheetTemplate();
      sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));
    });

    it('sheet set after component is initialized', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.sheet).toBe(sheet);
    }));

    it('template set after component is initialized', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.template).toBe(template);
    }));
  });

  describe('should convert', () => {
    let sheetService: SheetService;

    beforeEach(() => {
      sheetService = TestBed.get(SheetService);
    });

    it('imperial to metric units when weight is 0', fakeAsync(() => {
      const template = new SheetTemplate();
      template.metaData.unit = Unit.IMPERIAL;
      template.weight = 0;
      const sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.alternativeUnitValue).toBe('0 UNIT.METRIC.WEIGHT');
    }));

    it('imperial to metric units with a trivial case', fakeAsync(() => {
      const template = new SheetTemplate();
      template.metaData.unit = Unit.IMPERIAL;
      template.weight = 10;
      const sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.alternativeUnitValue).toBe('5 UNIT.METRIC.WEIGHT');
    }));

    it('metric to imperial units when weight is 0', fakeAsync(() => {
      const template = new SheetTemplate();
      template.metaData.unit = Unit.METRIC;
      template.weight = 0;
      const sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.alternativeUnitValue).toBe('0 UNIT.IMPERIAL.WEIGHT');
    }));

    it('metric to imperial units with a trivial case', fakeAsync(() => {
      const template = new SheetTemplate();
      template.metaData.unit = Unit.METRIC;
      template.weight = 10;
      const sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.alternativeUnitValue).toBe('22 UNIT.IMPERIAL.WEIGHT');
    }));
  });
});
