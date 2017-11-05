import {Component, Input} from '@angular/core';
import {Weight} from '../../../../models/sheet/units/weight/weight.model';
import {WeightUnit} from '../../../../models/sheet/units/weight/weight.enum';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'gurpsy-weight',
  templateUrl: './weight.component.html'
})
export class WeightComponent {

  weightInPreferredUnit: number;
  preferredUnit: WeightUnit;
  weightInAlternativeUnit: number;
  localizedAlternativeUnitString: string;

  weightUnit = WeightUnit;

  constructor(private translate: TranslateService) {
  }

  @Input()
  public set weight(weight: Weight) {

    if (!weight) {
      return;
    }

    this.setWeightInPreferredUnit(weight);
    this.setPreferredUnit(weight);
    this.setWeightInAlternativeUnit(weight);
    this.setAlternativeUnit(weight);
  }

  private setWeightInPreferredUnit(weight: Weight): void {
    this.weightInPreferredUnit = weight.preferred;
  }

  private setWeightInAlternativeUnit(weight: Weight): void {
    this.weightInAlternativeUnit = weight.alternative;
  }

  private setPreferredUnit(weight): void {
    this.preferredUnit = weight.unit;
  }

  private setAlternativeUnit(weight): void {
    const localeKey = this.acquireLocaleKey(weight);

    this.localizedAlternativeUnitString = localeKey;

    if (localeKey) {
      this.translate.get(localeKey).subscribe((unit: string) => {
        this.localizedAlternativeUnitString = unit;
      });
    }
  }

  private acquireLocaleKey(weight: Weight): string {
    let localeKey: string;

    switch (weight.unit) {
      case WeightUnit.KG:
        localeKey = 'UNIT.IMPERIAL.WEIGHT';
        break;
      case WeightUnit.LB:
        localeKey = 'UNIT.METRIC.WEIGHT';
        break;
      default:
        localeKey = undefined;
    }

    return localeKey;
  }
}
