import {Template} from '../../../template/template.model';
import {Height} from './height.model';
import {Unit} from '../../../template/metadata/enums/unit';
import {HeightUnit} from './height.enum';

describe('Model Object Height', () => {
  let template: Template;

  beforeEach(() => {
    template = new Template();
  });

  it('should be created', () => {
    const weight = new Height(template);

    expect(weight).toBeTruthy();
  });

  describe('with metric units', () => {

    let metricTemplate: Template;

    beforeEach(() => {
      metricTemplate = new Template();
      metricTemplate.metaData.unit = Unit.METRIC;
    });

    it('should display the correct unit', () => {
      const weight = new Height(metricTemplate);

      expect(weight.unit).toBe(HeightUnit.M);
    });

    describe('and a weight of 0', () => {

      beforeEach(() => {
        metricTemplate.height = 0;
      });

      it('should display the correct preferred', () => {
        const weight = new Height(metricTemplate);

        expect(weight.preferred).toBe(0);
      });

      it('should display the correct alternative', () => {
        const weight = new Height(metricTemplate);

        expect(weight.alternative).toBe(0);
      });
    });

    describe('and a weight of 0', () => {

      beforeEach(() => {
        metricTemplate.height = 10;
      });

      it('should display the correct preferred', () => {
        const weight = new Height(metricTemplate);

        expect(weight.preferred).toBe(10);
      });

      it('should display the correct alternative', () => {
        const weight = new Height(metricTemplate);

        expect(weight.alternative.toFixed(2)).toBe('393.70');
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
      const height = new Height(imperialTemplate);

      expect(height.unit).toBe(HeightUnit.INCH);
    });

    describe('and a weight of 0', () => {

      beforeEach(() => {
        imperialTemplate.height = 0;
      });

      it('should display the correct preferred', () => {

        const height = new Height(imperialTemplate);

        expect(height.preferred).toBe(0);
      });

      it('should display the correct alternative', () => {
        const height = new Height(imperialTemplate);

        expect(height.alternative).toBe(0);
      });
    });

    describe('and a weight of 10', () => {

      beforeEach(() => {
        imperialTemplate.height = 10;
      });

      it('should display the correct preferred', () => {

        const height = new Height(imperialTemplate);

        expect(height.preferred).toBe(10);
      });

      it('should display the correct alternative', () => {
        const height = new Height(imperialTemplate);

        expect(height.alternative.toFixed(2)).toBe('0.25');
      });
    });
  });
});
