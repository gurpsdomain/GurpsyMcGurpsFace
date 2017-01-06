import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './delete-settings-dialog.component.html'
})
export class DeleteSettingsDialogComponent {

  constructor(public dialogRef: MdDialogRef<DeleteSettingsDialogComponent>) {
  }
}
