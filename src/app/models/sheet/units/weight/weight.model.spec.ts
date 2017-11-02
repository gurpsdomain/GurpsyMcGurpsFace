import {SheetTemplate} from '../../../sheet-template/sheet-template.model';
import {Weight} from './weight.model';
import {Unit} from '../../../sheet-template/metadata/enums/unit';
import {WeightUnit} from './weight.enum';

describe('Model Object Weight', () => {
  let template: SheetTemplate;

  beforeEach(() => {
    template = new SheetTemplate()
  });

  it('should be created', () => {
    const weight = new Weight(template);

    expect(weight).toBeTruthy();
  });

  describe('with metric units', () => {

    let metricTemplate: SheetTemplate;

    beforeEach(() => {
      metricTemplate = new SheetTemplate();
      metricTemplate.metaData.unit = Unit.METRIC;
    });

    it('should display the correct unit', () => {
      const weight = new Weight(metricTemplate);

      expect(weight.unit).toBe(WeightUnit.KG);
    });

    describe('and a weight of 0', () => {

      beforeEach(() => {
        metricTemplate.weight = 0;
      });

      it('should display the correct preferred', () => {
        const weight = new Weight(metricTemplate);

        expect(weight.preferred).toBe(0);
      });

      it('should display the correct alternative', () => {
        const weight = new Weight(metricTemplate);

        expect(weight.alternative).toBe(0);
      });
    });

    describe('and a weight of 0', () => {

      beforeEach(() => {
        metricTemplate.weight = 10;
      });

      it('should display the correct preferred', () => {
        const weight = new Weight(metricTemplate);

        expect(weight.preferred).toBe(10);
      });

      it('should display the correct alternative', () => {
        const weight = new Weight(metricTemplate);

        expect(weight.alternative.toFixed(0)).toBe('22');
      });
    });
  });

  describe('with imperial units', () => {

    let imperialTemplate: SheetTemplate;

    beforeEach(() => {
      imperialTemplate = new SheetTemplate();
      imperialTemplate.metaData.unit = Unit.IMPERIAL;
    });

    it('should display the correct unit', () => {
      const weight = new Weight(imperialTemplate);

      expect(weight.unit).toBe(WeightUnit.LB);
    });

    describe('and a weight of 0', () => {

      beforeEach(() => {
        imperialTemplate.weight = 0;
      });

      it('should display the correct preferred', () => {

        const weight = new Weight(imperialTemplate);

        expect(weight.preferred).toBe(0);
      });

      it('should display the correct alternative', () => {
        const weight = new Weight(imperialTemplate)

        expect(weight.alternative).toBe(0);
      });
    });

    describe('and a weight of 10', () => {

      beforeEach(() => {
        imperialTemplate.weight = 10;
      });

      it('should display the correct preferred', () => {

        const weight = new Weight(imperialTemplate);

        expect(weight.preferred).toBe(10);
      });

      it('should display the correct alternative', () => {
        const weight = new Weight(imperialTemplate)

        expect(weight.alternative.toFixed()).toBe('5');
      });
    });
  });
});
