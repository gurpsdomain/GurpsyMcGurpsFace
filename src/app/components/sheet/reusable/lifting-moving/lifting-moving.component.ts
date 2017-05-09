import { Component, OnInit } from '@angular/core';
import { OutputSheet } from '../../../../models/sheet/output';
import { OutputModelService } from '../../../../services/model-read-service/output-model.service';

@Component({
  selector: 'gurpsy-lifting-moving',
  templateUrl: './lifting-moving.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class LiftingMovingComponent implements OnInit {

  public sheet: OutputSheet;

  private modelReadService: OutputModelService;

  constructor(modelReadService: OutputModelService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit() {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
