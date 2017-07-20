import {Component} from '@angular/core';
import {ModelUpdatingComponent} from '../../../model-updating.component';
import {IdentityUpdaterComponent} from '../../../dialog/model-updaters/identity-updater/identity-updater.component';
import {GurpsyComponent} from '../../../../gurpsy.component';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'gurpsy-identity',
  templateUrl: 'identity.component.html',
  styleUrls: [
    '../../sheet.component.scss'
  ]
})
export class IdentityComponent extends ModelUpdatingComponent {

  private identityDialogRef: MdDialogRef<IdentityUpdaterComponent>;

  public openDialog(): void {
    this.identityDialogRef = this.dialog.open(IdentityUpdaterComponent, {
      disableClose: false,
      width: GurpsyComponent.DIALOG_WIDTH
    });

    this.identityDialogRef.componentInstance.model = this.updateSheet;

    this.identityDialogRef.afterClosed().subscribe(result => {
        this.updateSheet = result;
        this.updateModel();
        this.identityDialogRef = null
      }
    );
  }
}
