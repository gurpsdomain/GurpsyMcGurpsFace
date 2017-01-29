import {Component} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {Sheet} from '../../../../model/sheet/sheet';

@Component({
  selector: 'gurpsy-description-component',
  templateUrl: './description.component.html',
  styleUrls: ['../../sheet.component.scss',
    './description.component.scss']
})
export class DescriptionComponent {

  public sheet: Sheet;

  constructor(modelReadService: ModelReadService) {
    this.sheet = modelReadService.getSheet();
  }
}
