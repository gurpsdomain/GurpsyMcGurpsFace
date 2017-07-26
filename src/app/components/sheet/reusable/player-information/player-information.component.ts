import {Component} from '@angular/core';
import {TemplateUpdatingComponent} from '../../../template-updating.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationUpdaterComponent} from '../../../dialog/template-updaters/player-information-updater/player-information-updater.component';

@Component({
  selector: 'gurpsy-player-information',
  templateUrl: 'player-information.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class PlayerInformationComponent extends TemplateUpdatingComponent<PlayerInformationUpdaterComponent> {

  protected setComponentType(): void {
    this.dialogType = PlayerInformationUpdaterComponent;
  }
}
