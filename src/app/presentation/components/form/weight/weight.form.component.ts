import {Component, Input, OnInit} from '@angular/core';
import {SettingsService} from '../../../../services/settings/settings.service';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';
import {Unit} from '../../../../models/settings/enums/unit.enum';
import {GurpsyConstants} from '../../../../gurpsy.constants';

@Component({
  selector: 'gurpsy-weight',
  templateUrl: './weight.form.component.html'
})
export class WeightFormComponent implements OnInit {

  @Input()
  public template: SheetTemplate;
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
