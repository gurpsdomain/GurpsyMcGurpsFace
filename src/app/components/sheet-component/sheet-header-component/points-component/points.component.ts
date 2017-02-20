import {Component, OnInit} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {SheetImpl} from '../../../../model/sheet-impl';

@Component({
  selector: 'gurpsy-points-component',
  templateUrl: './points.component.html',
  styleUrls: ['../../sheet.component.scss',
    './points.component.scss'
  ]
})
export class PointsComponent implements OnInit {
  public sheet: SheetImpl;

  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }

}
