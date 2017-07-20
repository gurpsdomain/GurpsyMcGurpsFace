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

  private portraitDialogRef: MdDialogRef<IdentityUpdaterComponent>;

  public openDialog(file: File): void {
    this.portraitDialogRef = this.dialog.open(IdentityUpdaterComponent, {
      disableClose: false,
      width: GurpsyComponent.DIALOG_WIDTH
    });

    this.portraitDialogRef.afterClosed().subscribe(result => {
        console.log(result);
        this.portraitDialogRef = null
      }
    );
  }
}
