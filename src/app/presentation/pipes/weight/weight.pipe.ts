import {Pipe, PipeTransform} from '@angular/core';
import {SettingsService} from '../../../services/settings/settings.service';
import {Unit} from '../../../models/settings/enums/unit.enum';
import {GurpsyConstants} from '../../../gurpsy.constants';

@Pipe({
  name: 'weight',
  pure: false
})
export class WeightPipe implements PipeTransform {

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

  public transformValue(value: number): number {
    switch (this.unit) {
      case Unit.METRIC:
        return Math.round(value / GurpsyConstants.UNIT_WEIGHT_CONVERSION_FACTOR);
      default :
        return value;
    }
  }

  private getUnit(): string {
    switch (this.unit) {
      case Unit.METRIC:
        return GurpsyConstants.UNIT_KG;
      default :
        return GurpsyConstants.UNIT_LB;
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
