import {Component, OnInit} from '@angular/core';
import {SheetImpl} from '../../../../models/sheet/sheet-impl';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';

@Component({
  selector: 'gurpsy-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: [
    './attributes.component.scss',
    '../../sheet.component.scss'
  ]
})
export class AttributesComponent implements OnInit {

  public sheet: SheetImpl;

  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}