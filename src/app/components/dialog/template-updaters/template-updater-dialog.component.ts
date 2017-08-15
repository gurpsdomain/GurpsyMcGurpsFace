import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {SheetTemplate} from '../../../models/sheet-template/sheet-template.model';

@Component({
  template: ''
})
export class TemplateUpdaterDialogComponent {

  template: SheetTemplate;
  data: any;

  constructor(private dialogRef: MdDialogRef<TemplateUpdaterDialogComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.template);
  }
}
