import { Component, OnInit } from '@angular/core';
import { SheetImpl } from '../../../../models/sheet/sheet-impl';
import { ModelReadService } from '../../../../services/model-read-service/model-read.service';

@Component({
  selector: 'gurpsy-lifting-moving',
  templateUrl: './lifting-moving.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class LiftingMovingComponent implements OnInit {

  public sheet: SheetImpl;

  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit() {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
