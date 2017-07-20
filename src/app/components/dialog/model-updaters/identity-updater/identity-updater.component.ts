import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelFactoryService} from '../../../../factories/model/model-factory.service';
import {UpdateSheet} from '../../../../models/sheet/update/update-sheet.model';

@Component({
  templateUrl: './identity-updater.component.html',
  styleUrls: ['./identity-updater.component.scss'],
  providers: [ModelFactoryService]
})
export class IdentityUpdaterComponent {

  model: UpdateSheet;

  constructor(private dialogRef: MdDialogRef<IdentityUpdaterComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.model);
  }
}
