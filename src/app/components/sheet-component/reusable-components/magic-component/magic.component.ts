import {Component, OnInit} from '@angular/core';
import {Sheet} from '../../../../model/sheet';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';

@Component({
  selector: 'gurpsy-magic-component',
  templateUrl: 'magic.component.html',
  styleUrls: [
    './magic.component.scss',
    '../../sheet.component.scss'
  ]
})
export class MagicComponent implements OnInit {

  public sheet: Sheet;
  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
