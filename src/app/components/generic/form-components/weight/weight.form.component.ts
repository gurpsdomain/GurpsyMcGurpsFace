import {Component, Input, OnInit} from '@angular/core';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';

@Component({
  selector: 'gurpsy-weight',
  templateUrl: './weight.form.component.html'
})
export class WeightFormComponent implements OnInit {

  public static LB = 'lb';
  public static KG = 'kg';

  @Input()
  public template: SheetTemplate;
  public metrics: string;

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit(): void {
    this.initUnit();
  }

  private initUnit(): void {
    this.settingsService.getMetrics()
      .then(metrics => this.metrics = metrics)
      .catch(err => this.metrics = SettingsService.METRICS_DEFAULT);
    this.settingsService.settingsChange$
      .subscribe(settings => this.metrics = settings.metrics);
  }
}
