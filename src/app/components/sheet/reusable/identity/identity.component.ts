import {Component, OnInit} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {OutputSheet} from '../../../../models/sheet/output';

@Component({
  selector: 'gurpsy-identity',
  templateUrl: 'identity.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class IdentityComponent implements OnInit {

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
