import {Component, OnInit} from '@angular/core';
import {ModelService} from '../../../../services/model-service/model.service';
import {OutputSheet} from '../../../../models/sheet/output';

@Component({
  selector: 'gurpsy-disadvantages',
  templateUrl: 'disadvantages.component.html',
  styleUrls: ['./disadvantages.component.scss',
    '../../sheet.component.scss'
  ]
})
export class DisadvantagesComponent implements OnInit {

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
