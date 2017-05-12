import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelService} from '../../../services/model-service/model.service';
import {StorageService} from '../../../services/storage-service/storage.service';
import {OutputSheet} from '../../../models/sheet/output';

@Component({
  selector: 'gurpsy-open-sheet-dialog',
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: [
    '../dialog.component.scss',
    './open-sheet-dialog.component.scss'
  ]
})
export class OpenSheetDialogComponent {

  public showOk = false;
  public previouslyOpenedSheets: OutputSheet[] = [];

  private selectedFile: Array<File> = [];
  private selectedPreviousSheet: OutputSheet = null;

  private dialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private modelReadService: ModelService;
  private storageService: StorageService;

  constructor(dialogRef: MdDialogRef<OpenSheetDialogComponent>,
              modelReadService: ModelService,
              storageService: StorageService) {
    this.dialogRef = dialogRef;
    this.modelReadService = modelReadService;
    this.storageService = storageService;

    this.initPreviouslyOpenedSheetList();
  }

  public onLoadSheet(): void {

    this.handleFileSelected();
    this.handlePreviousSheetSelected();

    this.dialogRef.close();
  }

  public onFileSelect(fileInput: any) {
    this.selectedFile = <Array<File>> fileInput.target.files;

    this.setShowOk();
  }

  public onPreviousSheetSelected(sheet: OutputSheet) {
    this.selectedPreviousSheet = sheet;

    this.setShowOk();
  }

  private handleFileSelected() {
    const sheet: File = this.selectedFile[0];
    this.modelReadService.loadSheetFromFile(sheet);
  }

  private handlePreviousSheetSelected() {
    this.modelReadService.loadSheet(this.selectedPreviousSheet);
  }

  private setShowOk(): void {
    this.showOk = this.selectedFile.length > 0 ||
      this.selectedPreviousSheet !== null;
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setPreviouslyOpenedSheets(sheets));
  }

  private setPreviouslyOpenedSheets(sheets: OutputSheet[]): void {
    this.previouslyOpenedSheets = sheets;
  }
}

export enum SelectedTab {
  File = 0,
  Previous = 1
}
