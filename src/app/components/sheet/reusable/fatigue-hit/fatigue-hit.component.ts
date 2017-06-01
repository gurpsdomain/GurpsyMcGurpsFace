import {Component, OnInit} from '@angular/core';
import {OutputSheet} from '../../../../models/sheet/output';
import {ModelService} from '../../../../services/front-end/model/model.service';

@Component({
  selector: 'gurpsy-fatigue-hit',
  templateUrl: './fatigue-hit.component.html',
  styleUrls: [
    '../../sheet.component.scss',
    './fatigue-hit.component.scss']
})
export class FatigueHitComponent implements OnInit {

  public sheet: OutputSheet;

  constructor(private modelReadService: ModelService) {
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
