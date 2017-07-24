import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Template} from '../../../models/sheet/template/template.model';

@Component({
  template: ''
})
export class ModelUpdaterDialogComponent {

  template: Template;

  constructor(private dialogRef: MdDialogRef<ModelUpdaterDialogComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.template);
  }
}
