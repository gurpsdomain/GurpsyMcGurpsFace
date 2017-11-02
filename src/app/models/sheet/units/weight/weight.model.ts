import {SheetTemplate} from '../../../sheet-template/sheet-template.model';
import {Unit} from '../../../sheet-template/metadata/enums/unit';
import {WeightUnit} from './weight.enum';

export class Weight {

  preferred: number;
  unit: WeightUnit;
  alternative: number;

  private UNIT_WEIGHT_POUNDS_TO_KG_CONVERSION_FACTOR = 0.45359237;

  constructor(template: SheetTemplate) {
    this.setPreferred(template.weight);
    this.setUnit(template.metaData.unit);
    this.setAlternative(template.weight, template.metaData.unit);
  }

  private setPreferred(weight: number): void {
    this.preferred = weight
  }

  private setUnit(unit: Unit): void {
    switch (unit) {
      case Unit.IMPERIAL:
        this.unit = WeightUnit.LB;
        break;
      case Unit.METRIC:
        this.unit = WeightUnit.KG;
        break;
    }
  }

  private setAlternative(weight: number, unit: Unit): void {
    switch (unit) {
      case Unit.IMPERIAL:
        this.alternative = weight * this.UNIT_WEIGHT_POUNDS_TO_KG_CONVERSION_FACTOR;
        break;
      case Unit.METRIC:
        this.alternative = weight / this.UNIT_WEIGHT_POUNDS_TO_KG_CONVERSION_FACTOR;
        break;
    }
  }
}
