import {Component} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {Sheet} from '../../../../model/sheet/sheet';

@Component({
    selector: 'gurpsy-points-component',
    templateUrl: './points.component.html',
    styleUrls: ['../../sheet.component.scss',
        './points.component.scss'
    ]
})
export class PointsComponent {
  public sheet: Sheet;

  constructor(modelReadService: ModelReadService) {
    this.sheet = modelReadService.getSheet();
  }

}
