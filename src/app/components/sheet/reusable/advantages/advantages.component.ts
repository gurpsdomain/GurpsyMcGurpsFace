import {Component, OnInit} from '@angular/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {OutputSheet} from '../../../../models/sheet/output';

@Component({
  selector: 'gurpsy-advantages',
  templateUrl: 'advantages.component.html',
  styleUrls: ['./advantages.component.scss',
    '../../sheet.component.scss'
  ]
})
export class AdvantagesComponent implements OnInit {

  public sheet: OutputSheet;
  private modelReadService: ModelService;

  constructor(modelReadService: ModelService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
