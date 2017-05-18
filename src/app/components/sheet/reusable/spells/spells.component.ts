import {Component, OnInit} from '@angular/core';
import {OutputSheet} from '../../../../models/sheet/output';
import {ModelService} from '../../../../services/front-end/model-service/model.service';

@Component({
  selector: 'gurpsy-spells',
  templateUrl: 'spells.component.html',
  styleUrls: [
    './spells.component.scss',
    '../../sheet.component.scss'
  ]
})
export class SpellsComponent implements OnInit {

  public sheet: OutputSheet;
  private modelReadService: ModelService;

  constructor(modelReadService: ModelService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
