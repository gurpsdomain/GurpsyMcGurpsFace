import {Component} from '@angular/core';
// tslint:disable-next-line max-line-length
import {PlayerInformationUpdaterComponent} from '../../../dialoges/template-updaters/player-information-updater/player-information-updater.component';
import {SheetUpdatingComponent} from '../../../components/sheet-updating.component';
import {CustomDialogInitiatingComponent} from '../../../components/custom-dialog-initiating.component';

@Component({
  selector: 'gurpsy-player-information',
  templateUrl: './player-information.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class PlayerInformationComponent extends SheetUpdatingComponent<PlayerInformationUpdaterComponent>
  implements CustomDialogInitiatingComponent {

  public setComponentType(): void {
    this.dialogType = PlayerInformationUpdaterComponent;
  }
}
