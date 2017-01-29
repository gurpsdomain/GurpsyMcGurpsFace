import {Component} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {Sheet} from '../../../../model/sheet/sheet';

@Component({
  selector: 'gurpsy-portrait-component',
  templateUrl: './portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    './portrait.component.scss'
  ]
})
export class PortraitComponent {

  public sheet: Sheet;

  constructor(modelReadService: ModelReadService) {
    this.sheet = modelReadService.getSheet();
  }
}
