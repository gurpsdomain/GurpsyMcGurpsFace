import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.scss']
})
export class AboutDialogComponent {


  private dialogRef: MdDialogRef<AboutDialogComponent>;

  constructor(dialogRef: MdDialogRef<AboutDialogComponent>) {
    this.dialogRef = dialogRef;

  }
}
