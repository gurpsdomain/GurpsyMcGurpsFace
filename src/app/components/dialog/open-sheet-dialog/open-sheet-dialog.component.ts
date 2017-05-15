import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelService} from '../../../services/model-service/model.service';
import {StorageService} from '../../../services/storage-service/storage.service';
import {OutputSheet} from '../../../models/sheet/output';
import {InputSheet} from '../../../models/sheet/input';

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
  public selectedSheetName = '';
  public selectedSheet: InputSheet;
  public previouslyOpenedSheets: OutputSheet[] = [];

  private selectedPreviousSheet: OutputSheet = null;

  private dialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private modelService: ModelService;
  private storageService: StorageService;

  constructor(dialogRef: MdDialogRef<OpenSheetDialogComponent>,
              modelService: ModelService,
              storageService: StorageService) {
    this.dialogRef = dialogRef;
    this.modelService = modelService;
    this.storageService = storageService;

    this.initPreviouslyOpenedSheetList();
  }

  public onOk(): void {
    this.dialogRef.close();
  }

  public onFileSelect(fileInput: Array<File>) {
    this.modelService.loadSheetFromFile(fileInput[0]).then(sheet => this.setSelectedSheet(sheet));
  }

  public onPreviousSheetSelected(sheet: OutputSheet) {
    this.selectedPreviousSheet = sheet;
  }

  private setShowOk(ok: boolean): void {
    this.showOk = ok;
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setPreviouslyOpenedSheets(sheets));
  }

  private setPreviouslyOpenedSheets(sheets: OutputSheet[]): void {
    this.previouslyOpenedSheets = sheets;
  }

  private setSelectedSheet(sheet: InputSheet): void {
    this.selectedSheet = sheet;
    this.selectedSheetName = sheet.name;
    this.setShowOk(this.selectedSheetName !== '');
  }
}
