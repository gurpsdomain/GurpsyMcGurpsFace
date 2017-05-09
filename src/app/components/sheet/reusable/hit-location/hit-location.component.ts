import {Component, OnInit} from '@angular/core';
import {OutputSheet} from '../../../../models/sheet/output';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';

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

  private modelReadService: OutputModelService;

  constructor(modelReadService: OutputModelService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
