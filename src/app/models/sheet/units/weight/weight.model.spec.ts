import {Template} from '../../../template/template.model';
import {Weight} from './weight.model';
import {Unit} from '../../../template/metadata/enums/unit';
import {WeightUnit} from './weight.enum';

describe('Model Object Weight', () => {
  let template: Template;

  beforeEach(() => {
    template = new Template();
  });

  it('should be created', () => {
    const weight = new Weight(template);

    expect(weight).toBeTruthy();
  });

  describe('with metric units', () => {

    let metricTemplate: Template;

    beforeEach(() => {
      metricTemplate = new Template();
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

    let imperialTemplate: Template;

    beforeEach(() => {
      imperialTemplate = new Template();
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
        const weight = new Weight(imperialTemplate);

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
        const weight = new Weight(imperialTemplate);

        expect(weight.alternative.toFixed()).toBe('5');
      });
    });
  });
});
