import {Component} from '@angular/core';
import {IdentityUpdaterComponent} from '../../../dialog/template-updaters/identity-updater/identity-updater.component';
import {TemplateUpdatingComponent} from '../../../template-updating.component';

@Component({
  selector: 'gurpsy-identity',
  templateUrl: 'identity.component.html',
  styleUrls: [
    '../../sheet.component.scss'
  ]
})
export class IdentityComponent extends TemplateUpdatingComponent<IdentityUpdaterComponent> {

  protected setComponentType(): void {
    this.dialogType = IdentityUpdaterComponent;
  }
}
