import {Component} from '@angular/core';
import {IdentityUpdaterComponent} from '../../../dialog/template-updaters/identity-updater/identity-updater.component';
import {SheetUpdatingComponent} from '../../../sheet-updating.component';
import {CustomDialogInitiatingComponent} from '../../../custom-dialog-initiating.component';

@Component({
  selector: 'gurpsy-identity',
  templateUrl: 'identity.component.html',
  styleUrls: [
    '../../sheet.component.scss'
  ]
})
export class IdentityComponent extends SheetUpdatingComponent<IdentityUpdaterComponent> implements CustomDialogInitiatingComponent {

  public setComponentType(): void {
    this.dialogType = IdentityUpdaterComponent;
  }
}
