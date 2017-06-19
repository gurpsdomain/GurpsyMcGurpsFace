import {Pipe, PipeTransform} from '@angular/core';
import {SettingsService} from '../services/front-end/settings/settings.service';

@Pipe({
  name: 'weight',
  pure: false
})
export class WeightPipe implements PipeTransform {

  private static WEIGHT_CONVERSION_FACTOR = 2.20462262185;
  private static LBS = 'lbs';
  private static KG = 'kg';

  private metrics: string;

  constructor(private settingsService: SettingsService) {
    this.initUnit();
  }

  transform(value: any, args?: any): any {
    return this.transformValue(value) + ' ' + this.getUnit();
  }

  private transformValue(value: number): number {
    switch (this.metrics) {
      case SettingsService.METRICS_SI:
        return Math.round(value / WeightPipe.WEIGHT_CONVERSION_FACTOR);
      default :
        return value;
    }
  }

  private getUnit(): string {
    switch (this.metrics) {
      case SettingsService.METRICS_SI:
        return WeightPipe.KG;
      default :
        return WeightPipe.LBS;
    }
  }

  private initUnit(): void {
    this.settingsService.getMetrics().then(metrics => this.metrics = metrics);
    this.settingsService.getSettingsObserver()
      .subscribe(settings => this.metrics = settings.metrics);
  }
}
