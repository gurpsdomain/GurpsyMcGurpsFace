import { Component, OnInit } from '@angular/core';
import { OutputSheet } from '../../../../models/sheet/output';
import { ModelReadService } from '../../../../services/model-read-service/model-read.service';

@Component({
  selector: 'gurpsy-encumbrance',
  templateUrl: './encumbrance.component.html',
  styleUrls: [
    './encumbrance.component.scss',
    '../../sheet.component.scss'
  ]
})
export class EncumbranceComponent implements OnInit {

  public sheet: OutputSheet;

  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit() {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
