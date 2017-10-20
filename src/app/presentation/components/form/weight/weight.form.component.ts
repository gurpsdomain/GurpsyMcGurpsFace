import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {SettingsService} from '../../../../services/settings/settings.service';
import {Unit} from '../../../../models/settings/enums/unit.enum';
import {GurpsyConstants} from '../../../../gurpsy.constants';
import {WeightPipe} from '../../../pipes/weight/weight.pipe';

@Component({
  selector: 'gurpsy-weight',
  templateUrl: './weight.form.component.html'
})
export class WeightFormComponent implements OnInit, AfterContentInit {

  ngAfterContentInit(): void {
    console.log('Iniitiiasdasdasd: ', this.weight);

    switch (this.unit) {
      case Unit.METRIC:
        this.weightViewValue = Math.round(this.weight / GurpsyConstants.UNIT_WEIGHT_CONVERSION_FACTOR);
      default :
        this.weightViewValue = this.weight;
    }

    console.log('Iniitiiasdasdassdfsdfd: ', this.weightViewValue);

  }

  @Input()
  public weight: number;

  public weightViewValue = 0;

  public unit: Unit;
  public unitEnum = Unit;

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit(): void {
    this.initUnit();
  }

  private initUnit(): void {
    this.settingsService.getUnit()
      .then(unit => this.unit = unit)
      .catch(err => this.unit = GurpsyConstants.UNIT_DEFAULT_ENUM);
    this.settingsService.settingsChange$
      .subscribe(settings => this.unit = settings.unit);
  }
}
