import {Component, Input} from '@angular/core';
import {SettingsService} from '../../../services/front-end/settings/settings.service';

@Component({
  selector: 'gurpsy-weight',
  templateUrl: './weight.component.html',
  styleUrls: []
})
export class WeightComponent {

  @Input()
  public weight: string;

  constructor(private settingsService: SettingsService) {
  }
}
