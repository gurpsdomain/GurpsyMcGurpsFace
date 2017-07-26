import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Template} from '../../../models/sheet/template/template.model';

@Component({
  template: ''
})
export class TemplateUpdaterDialogComponent {

  template: Template;
  data: any;

  constructor(private dialogRef: MdDialogRef<TemplateUpdaterDialogComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.template);
  }
}
