import {Component, OnInit} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {Sheet} from '../../../../model/sheet/sheet';

@Component({
  selector: 'gurpsy-points-component',
  templateUrl: './points.component.html',
  styleUrls: ['../../sheet.component.scss',
    './points.component.scss'
  ]
})
export class PointsComponent implements OnInit {
  public sheet: Sheet;

  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }

}
