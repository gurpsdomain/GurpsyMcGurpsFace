import {Component, OnInit} from '@angular/core';
import {OutputSheet} from '../../../../models/sheet/output';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';

@Component({
  selector: 'gurpsy-fatigue-hit',
  templateUrl: './fatigue-hit.component.html',
  styleUrls: [
    '../../sheet.component.scss',
    './fatigue-hit.component.scss']
})
export class FatigueHitComponent implements OnInit {

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
