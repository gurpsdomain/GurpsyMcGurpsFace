import {Component, Input} from '@angular/core';
import {Height} from '../../../../models/sheet/units/height/height.model';
import {HeightUnit} from '../../../../models/sheet/units/height/height.enum';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'gurpsy-height',
  templateUrl: './height.component.html'
})
export class HeightComponent {

  heightInPreferredUnit: number;
  preferredUnit: HeightUnit;
  heightInAlternativeUnit: number;
  localizedAlternativeUnitString: string;

  heightUnit = HeightUnit;

  constructor(private translate: TranslateService) {
  }

  @Input()
  public set height(height: Height) {

    if (!height) {
      return;
    }

    this.setHeightInPreferredUnit(height);
    this.setPreferredUnit(height);
    this.setHeightInAlternativeUnit(height);
    this.setAlternativeUnit(height);
  }

  private setHeightInPreferredUnit(height: Height): void {
    this.heightInPreferredUnit = height.preferred;
  }

  private setHeightInAlternativeUnit(height: Height): void {
    this.heightInAlternativeUnit = height.alternative;
  }

  private setPreferredUnit(height): void {
    this.preferredUnit = height.unit;
  }

  private setAlternativeUnit(height): void {
    const localeKey = this.acquireLocaleKey(height);

    this.localizedAlternativeUnitString = localeKey;

    if (localeKey) {
      this.translate.get(localeKey).subscribe((unit: string) => {
        this.localizedAlternativeUnitString = unit;
      });
    }
  }

  private acquireLocaleKey(height: Height): string {
    let localeKey: string;

    switch (height.unit) {
      case HeightUnit.M:
        localeKey = 'UNIT.IMPERIAL.HEIGHT';
        break;
      case HeightUnit.INCH:
        localeKey = 'UNIT.METRIC.HEIGHT';
        break;
      default:
        localeKey = undefined;
    }

    return localeKey;
  }
}
