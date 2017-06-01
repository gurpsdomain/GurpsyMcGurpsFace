import {Component, OnInit} from '@angular/core';
import {OutputSheet} from '../../../../models/sheet/output';
import {ModelService} from '../../../../services/front-end/model/model.service';

@Component({
  selector: 'gurpsy-equipment',
  templateUrl: 'equipment.component.html',
  styleUrls: ['./equipment.component.scss',
    '/../../sheet.component.scss']
})
export class EquipmentComponent implements OnInit {

  public sheet: OutputSheet;

  constructor(private modelReadService: ModelService) {
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
