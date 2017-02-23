import {Component} from '@angular/core';
import {MdDialogRef, MdTabChangeEvent} from '@angular/material';
import {ModelReadService} from '../../../services/model-read-service/model-read.service';
import {StorageService} from '../../../services/storage-service/storage.service';
import {Sheet} from '../../../model/sheet';



@Component({
  selector: 'gurpsy-open-sheet-dialog',
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: ['./open-sheet-dialog.component.scss']
})
export class OpenSheetDialogComponent {

  public showOk = false;
  public previouslyOpenedSheets: Sheet[] = [];

  private selectedTab: SelectedTab = SelectedTab.File;
  private selectedFile: Array<File> = [];
  private selectedPreviousSheet: Sheet = null;
  private dialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private modelReadService: ModelReadService;
  private storageService: StorageService;

  constructor(dialogRef: MdDialogRef<OpenSheetDialogComponent>,
              modelReadService: ModelReadService,
              storageService: StorageService) {
    this.dialogRef = dialogRef;
    this.modelReadService = modelReadService;
    this.storageService = storageService;

    this.initPreviouslyOpenedSheetList();
  }

  public onLoadSheet(): void {

    this.dialogRef.close();

    if (this.selectedTab === SelectedTab.File) {
      this.handleFileSelected();

    } else if (this.selectedTab === SelectedTab.Previous) {
      this.handlePreviousSheetSelected();
    }
  }

  public onFileSelect(fileInput: any) {
    this.selectedFile = <Array<File>> fileInput.target.files;

    this.setShowOk();
  }

  public onTabSelectChange(event: MdTabChangeEvent) {
    if (SelectedTab.File === event.index) {
      this.selectedTab = SelectedTab.File;
    } else {
      this.selectedTab = SelectedTab.Previous;
    }

    this.setShowOk();
  }

  public onPreviousSheetSelected(sheet: Sheet) {
    this.selectedPreviousSheet = sheet;

    this.setShowOk();
  }

  private handleFileSelected() {
    let sheet: File = this.selectedFile[0];
    this.modelReadService.loadSheetFromFile(sheet);
  }

  private handlePreviousSheetSelected() {
    this.modelReadService.loadSheet(this.selectedPreviousSheet);
  }

  private setShowOk(): void {
    this.showOk = (this.selectedTab === SelectedTab.File && this.selectedFile.length > 0) ||
      (this.selectedTab === SelectedTab.Previous && this.selectedPreviousSheet !== null);
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setPreviouslyOpenedSheets(sheets));
  }

  private setPreviouslyOpenedSheets(sheets: Sheet[]): void {
    this.previouslyOpenedSheets = sheets;
  }
}

export enum SelectedTab {
  File = 0,
  Previous = 1
}
