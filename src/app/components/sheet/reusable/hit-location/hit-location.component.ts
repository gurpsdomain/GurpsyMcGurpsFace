import {Component, OnInit} from '@angular/core';
import {OutputSheet} from '../../../../models/sheet/output';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';

@Component({
  selector: 'gurpsy-hit-location',
  templateUrl: './hit-location.component.html',
  styleUrls: [
    './hit-location.component.scss',
    '../../sheet.component.scss'
  ]
})
export class HitLocationComponent implements OnInit {

  public sheet: OutputSheet;

  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
