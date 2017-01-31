import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelReadService} from '../../../services/model-read-service/model-read.service';

@Component({
  selector: 'gurpsy-open-sheet-dialog',
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: ['./open-sheet-dialog.component.scss']
})
export class OpenSheetDialogComponent {
  private selectedSheet: Array<File>;

  public sheetSelected: boolean = false;
  public dialogRef: MdDialogRef<OpenSheetDialogComponent>;
  public modelReadService: ModelReadService;

  constructor(dialogRef: MdDialogRef<OpenSheetDialogComponent>, modelReadService: ModelReadService) {
    this.dialogRef = dialogRef;
    this.modelReadService = modelReadService;
    this.selectedSheet = [];
  }

  onLoadSheet(): void {

    this.dialogRef.close();
    if (this.selectedSheet.length > 0) {
      let sheet: File = this.selectedSheet[0];
      this.modelReadService.loadSheet(sheet);
    }
  }

  onFileSelect(fileInput: any) {
    this.sheetSelected = true;
    this.selectedSheet = <Array<File>> fileInput.target.files;
  }
}
