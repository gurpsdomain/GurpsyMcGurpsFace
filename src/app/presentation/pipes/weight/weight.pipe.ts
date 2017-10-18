import {Pipe, PipeTransform} from '@angular/core';
import {SettingsService} from '../../../services/settings/settings.service';
import {Unit} from '../../../models/settings/enums/unit.enum';
import {GurpsyConstants} from '../../../gurpsy.constants';

@Pipe({
  name: 'weight',
  pure: false
})
export class WeightPipe implements PipeTransform {

  private static WEIGHT_CONVERSION_FACTOR = 2.20462262185;

  private unit: Unit;

  constructor(private settingsService: SettingsService) {
    this.initUnit();
  }

  transform(value: any, args?: any): any {
    if (!!!value) {
      return '';
    }

    return this.transformValue(value) + ' ' + this.getUnit();
  }

  private transformValue(value: number): number {
    switch (this.unit) {
      case Unit.METRIC:
        return Math.round(value / WeightPipe.WEIGHT_CONVERSION_FACTOR);
      default :
        return value;
    }
  }

  private getUnit(): string {
    switch (this.unit) {
      case Unit.IMPERIAL:
        return GurpsyConstants.UNIT_LB;
      default :
        return GurpsyConstants.UNIT_KG;
    }
  }

  private initUnit(): void {
    this.settingsService.getUnit()
      .then(unit => this.unit = unit)
      .catch(err => this.unit = GurpsyConstants.UNIT_DEFAULT_ENUM);
    this.settingsService.settingsChange$
      .subscribe(settings => this.unit = settings.unit);
  }
}
