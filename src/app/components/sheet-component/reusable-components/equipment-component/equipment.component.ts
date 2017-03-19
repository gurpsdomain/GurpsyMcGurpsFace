import { Component, OnInit } from '@angular/core';
import {Sheet} from '../../../../model/sheet';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';

@Component({
  selector: 'gurpsy-equipment-component',
  templateUrl: 'equipment.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class EquipmentComponent implements OnInit {

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
