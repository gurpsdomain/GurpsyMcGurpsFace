import { Component, OnInit } from '@angular/core';
import { OutputSheet } from '../../../../models/sheet/output';
import { ModelService } from '../../../../services/front-end/model/model.service';

@Component({
  selector: 'gurpsy-lifting-moving',
  templateUrl: './lifting-moving.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class LiftingMovingComponent implements OnInit {

  public sheet: OutputSheet;

  constructor(private modelReadService: ModelService) {
  }

  ngOnInit() {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
