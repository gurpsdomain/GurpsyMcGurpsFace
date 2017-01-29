import {Component} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {Sheet} from '../../../../model/sheet/sheet';

@Component({
    selector: 'gurpsy-player-information-component',
    templateUrl: './player-information.component.html',
    styleUrls: ['../../sheet.component.scss']
})
export class PlayerInformationComponent {

  public sheet: Sheet;

  constructor(modelReadService: ModelReadService) {
    this.sheet = modelReadService.getSheet();
  }
}
