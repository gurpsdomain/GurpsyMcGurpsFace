import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {HeightComponent} from './height.component';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Height} from '../../../../models/sheet/units/height/height.model';
import {Template} from '../../../../models/template/template.model';
import {Unit} from '../../../../models/template/metadata/enums/unit';
import {HeightUnit} from '../../../../models/sheet/units/height/height.enum';

describe('HeightComponent', () => {
  let component: HeightComponent;
  let fixture: ComponentFixture<HeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeightComponent
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
    fixture = TestBed.createComponent(HeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('for a Metric template', () => {

    beforeEach(() => {
      const template = new Template();
      template.height = 100;
      template.metaData.unit = Unit.METRIC;

      component.height = new Height(template);
    });

    it('should have the correct preferred height', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.heightInPreferredUnit).toBe(100);
    }));

    it('should have the correct preferred unit', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.preferredUnit).toBe(HeightUnit.M);
    }));

    it('should have the correct Localized Alternative Unit String', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.localizedAlternativeUnitString).toBe('UNIT.IMPERIAL.HEIGHT');
    }));
  });
});
