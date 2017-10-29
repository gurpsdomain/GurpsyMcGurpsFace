import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {HeightDisplayComponent} from './height-display.component';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../../../services/logging/logging.service';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {SheetService} from '../../../../services/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {Unit} from '../../../../models/sheet-template/metadata/enums/unit';

describe('HeightDisplayComponent', () => {
  let component: HeightDisplayComponent;
  let fixture: ComponentFixture<HeightDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeightDisplayComponent
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
    fixture = TestBed.createComponent(HeightDisplayComponent);
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

    it('imperial to metric units when length is 0', fakeAsync(() => {
      const template = new SheetTemplate();
      template.metaData.unit = Unit.IMPERIAL;
      template.height = 0;
      const sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.alternativeUnitValue).toBe('0.00 UNIT.METRIC.HEIGHT');
    }));

    it('imperial to metric units with a trivial case', fakeAsync(() => {
      const template = new SheetTemplate();
      template.metaData.unit = Unit.IMPERIAL;
      template.height = 100;
      const sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.alternativeUnitValue).toBe('2.54 UNIT.METRIC.HEIGHT');
    }));

    it('metric to imperial units when length is 0', fakeAsync(() => {
      const template = new SheetTemplate();
      template.metaData.unit = Unit.METRIC;
      template.height = 0;
      const sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.alternativeUnitValue).toBe('0.00 UNIT.IMPERIAL.HEIGHT');
    }));

    it('metric to imperial units with a trivial case', fakeAsync(() => {
      const template = new SheetTemplate();
      template.metaData.unit = Unit.METRIC;
      template.height = 1;
      const sheet = new Sheet(template);

      spyOn(sheetService, 'getSheet')
        .and.returnValue(Promise.resolve(sheet));
      spyOn(sheetService, 'getTemplate')
        .and.returnValue(Promise.resolve(template));

      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.alternativeUnitValue).toBe('39.37 UNIT.IMPERIAL.HEIGHT');
    }));
  });
});
