import {Component} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {Sheet} from '../../../../model/sheet/sheet';

@Component({
    selector: 'gurpsy-identity-component',
    templateUrl: './identity.component.html',
    styleUrls: ['../../sheet.component.scss',
        './identity.component.scss']
})
export class IdentityComponent {

  public sheet: Sheet;

  constructor(modelReadService: ModelReadService) {
    this.sheet = modelReadService.getSheet();
    modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
