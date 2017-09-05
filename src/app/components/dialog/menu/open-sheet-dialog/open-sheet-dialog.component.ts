import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';

@Component({
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: ['../../dialog.component.scss',
    './open-sheet-dialog.component.scss'
  ]
})
export class OpenSheetDialogComponent {

  public showOk = false;
  public selectedFileName = '';
  public selectedSheet: SheetTemplate;

  constructor(private dialogRef: MdDialogRef<OpenSheetDialogComponent>,
              private modelService: SheetService) {
  }

  public onOk(): void {
    this.modelService.loadNewTemplate(this.selectedSheet);
    this.dialogRef.close();
  }

  public onFileSelect(fileInput: Array<File>) {
    const file = fileInput[0];
    this.modelService.createTemplateFromFile(file)
      .then(sheet => this.setSelectedSheet(sheet, file.name));
  }

  private setSelectedSheet(sheet: SheetTemplate, fileName: string): void {
    this.selectedSheet = sheet;
    this.selectedFileName = fileName;
    this.showOk = true;
  }
}
