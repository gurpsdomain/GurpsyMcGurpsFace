import {Component, OnInit} from '@angular/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {OutputSheet} from '../../../../models/sheet/output';

@Component({
  selector: 'gurpsy-identity',
  templateUrl: 'identity.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class IdentityComponent implements OnInit {

  public sheet: OutputSheet;

  constructor(private modelReadService: ModelService) {
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
