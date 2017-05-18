import {Component, OnInit} from '@angular/core';
import {ModelService} from '../../../../services/front-end/model-service/model.service';
import {OutputSheet} from '../../../../models/sheet/output';

@Component({
  selector: 'gurpsy-points',
  templateUrl: 'points.component.html',
  styleUrls: ['../../sheet.component.scss',
    'points.component.scss'
  ]
})
export class PointsComponent implements OnInit {
  public sheet: OutputSheet;

  private modelReadService: ModelService;

  constructor(modelReadService: ModelService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }

}
