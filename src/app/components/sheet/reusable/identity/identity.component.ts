import {Component, OnInit} from '@angular/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {OutputSheet} from '../../../../models/sheet/output/output.sheet.model';

@Component({
  selector: 'gurpsy-identity',
  templateUrl: 'identity.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class IdentityComponent implements OnInit {

  public sheet: OutputSheet;

  constructor(private modelService: ModelService) {
  }

  ngOnInit(): void {
    this.sheet = this.modelService.getSheet();
    this.modelService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
