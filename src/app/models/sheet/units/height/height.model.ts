import {SheetTemplate} from '../../../sheet-template/sheet-template.model';
import {Unit} from '../../../sheet-template/metadata/enums/unit';
import {HeightUnit} from './height.enum';

export class Height {

  preferred: number;
  unit: HeightUnit;
  alternative: number;

  private UNIT_HEIGHT_INCHES_TO_METER_CONVERSION_FACTOR = 0.0254;

  constructor(template: SheetTemplate) {
    this.setPreferred(template.height);
    this.setUnit(template.metaData.unit);
    this.setAlternative(template.height, template.metaData.unit);
  }

  private setPreferred(height: number): void {
    this.preferred = height
  }

  private setUnit(unit: Unit): void {
    switch (unit) {
      case Unit.IMPERIAL:
        this.unit = HeightUnit.INCH;
        break;
      case Unit.METRIC:
        this.unit = HeightUnit.M;
        break;
    }
  }

  private setAlternative(height: number, unit: Unit): void {
    switch (unit) {
      case Unit.IMPERIAL:
        this.alternative = height * this.UNIT_HEIGHT_INCHES_TO_METER_CONVERSION_FACTOR;
        break;
      case Unit.METRIC:
        this.alternative = height / this.UNIT_HEIGHT_INCHES_TO_METER_CONVERSION_FACTOR;
        break;
    }
  }
}
