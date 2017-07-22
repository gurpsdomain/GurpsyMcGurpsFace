import {Component} from '@angular/core';
import {ModelFactoryService} from '../../../../factories/model/model-factory.service';
import {ModelUpdaterDialogComponent} from '../model-updater-dialog.component';

@Component({
  templateUrl: './identity-updater.component.html',
  styleUrls: ['./identity-updater.component.scss'],
  providers: [ModelFactoryService]
})
export class IdentityUpdaterComponent extends ModelUpdaterDialogComponent {
}
