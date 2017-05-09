import {Component, OnInit} from '@angular/core';
import {OutputSheet} from '../../../../models/sheet/output';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';

@Component({
  selector: 'gurpsy-equipment',
  templateUrl: 'equipment.component.html',
  styleUrls: ['./equipment.component.scss',
    '/../../sheet.component.scss']
})
export class EquipmentComponent implements OnInit {

  public sheet: OutputSheet;
  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
