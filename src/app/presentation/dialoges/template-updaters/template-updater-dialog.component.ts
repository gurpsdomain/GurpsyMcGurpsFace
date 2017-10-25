import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SheetTemplate} from '../../../models/sheet-template/sheet-template.model';

@Component({
  template: ''
})
export class TemplateUpdaterDialogComponent {

  template: SheetTemplate = new SheetTemplate();
  data: any;

  constructor(private dialogRef: MatDialogRef<TemplateUpdaterDialogComponent>) {
  }

  public onOk(): void {
    this.dialogRef.close(this.template);
  }
}
