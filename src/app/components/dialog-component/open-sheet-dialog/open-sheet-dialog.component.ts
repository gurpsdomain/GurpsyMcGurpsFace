import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'gurpsy-open-sheet-dialog',
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: ['./open-sheet-dialog.component.scss']
})
export class OpenSheetDialogComponent {

  public dialogRef: MdDialogRef<OpenSheetDialogComponent>;

  constructor(dialogRef: MdDialogRef<OpenSheetDialogComponent>) {
    this.dialogRef = dialogRef;
  }
}
