import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {UpdateSheet} from '../../../models/sheet/update/update-sheet.model';

@Component({
  template: ''
})
export class ModelUpdaterDialogComponent {

  model: UpdateSheet;

  constructor(private dialogRef: MdDialogRef<ModelUpdaterDialogComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.model);
  }
}
