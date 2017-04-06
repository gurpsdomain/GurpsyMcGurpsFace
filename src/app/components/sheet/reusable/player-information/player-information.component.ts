import {Component, OnInit} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {SheetImpl} from '../../../../models/sheet/sheet-impl';

@Component({
  selector: 'gurpsy-player-information',
  templateUrl: 'player-information.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class PlayerInformationComponent implements OnInit {

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
