import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../../../services/front-end/model/model.service';
import {OutputSheet} from '../../../../models/sheet/output/output.sheet.model';

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

  constructor(private modelReadService: ModelService) {
  }

  ngOnInit() {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
