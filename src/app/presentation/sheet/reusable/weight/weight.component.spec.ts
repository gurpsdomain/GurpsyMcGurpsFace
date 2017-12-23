import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {WeightComponent} from './weight.component';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Weight} from '../../../../models/sheet/units/weight/weight.model';
import {Template} from '../../../../models/template/template.model';
import {Unit} from '../../../../models/template/metadata/enums/unit';
import {WeightUnit} from '../../../../models/sheet/units/weight/weight.enum';

describe('WeightComponent', () => {
  let component: WeightComponent;
  let fixture: ComponentFixture<WeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeightComponent
      ],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('for a Metric template', () => {

    beforeEach(() => {
      const template = new Template();
      template.weight = 100;
      template.metaData.unit = Unit.METRIC;

      component.weight = new Weight(template);
    });

    it('should have the correct preferred weight', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.weightInPreferredUnit).toBe(100);
    }));

    it('should have the correct preferred unit', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.preferredUnit).toBe(WeightUnit.KG);
    }));

    it('should have the correct Localized Alternative Unit String', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.localizedAlternativeUnitString).toBe('UNIT.IMPERIAL.WEIGHT');
    }));
  });
});
