import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelReadService} from '../../../services/model-read-service/model-read.service';
import {StorageService} from '../../../services/storage-service/storage.service';
import {SheetMapEntry} from '../../../model/json/sheetmap';

@Component({
  selector: 'gurpsy-open-sheet-dialog',
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: ['./open-sheet-dialog.component.scss']
})
export class OpenSheetDialogComponent {
  private selectedSheet: Array<File>;

  public sheetSelected = false;
  public previouslyOpenedSheets: SheetMapEntry[] = [];

  private dialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private modelReadService: ModelReadService;
  private storageService: StorageService;

  constructor(dialogRef: MdDialogRef<OpenSheetDialogComponent>,
              modelReadService: ModelReadService,
              storageService: StorageService) {
    this.dialogRef = dialogRef;
    this.modelReadService = modelReadService;
    this.storageService = storageService;
    this.selectedSheet = [];

    this.initPreviouslyOpenedSheetList();
  }

  public onLoadSheet(): void {

    this.dialogRef.close();
    if (this.selectedSheet.length > 0) {
      let sheet: File = this.selectedSheet[0];
      this.modelReadService.loadSheet(sheet);
    }
  }

  public onFileSelect(fileInput: any) {
    this.sheetSelected = true;
    this.selectedSheet = <Array<File>> fileInput.target.files;
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getSheets().then(
      sheetMap => this.previouslyOpenedSheets = sheetMap.sheets);
  }
}
