import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Template} from '../../../models/template/template.model';

@Component({
  template: ''
})
export class TemplateUpdaterDialogComponent {

  template: Template = new Template();
  data: any;

  constructor(private dialogRef: MatDialogRef<TemplateUpdaterDialogComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.template);
  }
}
