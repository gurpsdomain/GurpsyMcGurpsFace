import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelService} from '../../../services/front-end/model-service/model.service';
import {StorageService} from '../../../services/back-end/storage-service/storage.service';
import {OutputSheet} from '../../../models/sheet/output';
import {InputSheet} from '../../../models/sheet/input';
import {LoggingService} from '../../../services/back-end/logging-service/logging.service';
import {TranslateService} from '@ngx-translate/core';

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
  public selectedFileName = '';
  public selectedSheet: InputSheet;
  public previouslyOpenedSheets: OutputSheet[] = [];

  private selectedPreviousSheet: OutputSheet = null;

  private dialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private logginService: LoggingService;
  private modelService: ModelService;
  private storageService: StorageService;
  private translateService: TranslateService;

  constructor(dialogRef: MdDialogRef<OpenSheetDialogComponent>,
              loggingService: LoggingService,
              modelService: ModelService,
              storageService: StorageService,
              translateService: TranslateService) {
    this.dialogRef = dialogRef;
    this.logginService = loggingService;
    this.modelService = modelService;
    this.storageService = storageService;
    this.translateService = translateService;

    this.initPreviouslyOpenedSheetList();
  }

  public onOk(): void {
    this.modelService.loadSheet(this.selectedSheet);
    this.dialogRef.close();
  }

  public onFileSelect(fileInput: Array<File>) {
    const file = fileInput[0];
    this.modelService.loadSheetFromFile(file)
      .then(sheet => this.setSelectedSheet(sheet, file.name));
  }

  public onPreviousSheetSelected(sheet: OutputSheet) {
    this.selectedPreviousSheet = sheet;
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setPreviouslyOpenedSheets(sheets));
  }

  private setPreviouslyOpenedSheets(sheets: OutputSheet[]): void {
    this.previouslyOpenedSheets = sheets;
  }

  private setSelectedSheet(sheet: InputSheet, fileName: string): void {
    this.selectedSheet = sheet;
    this.selectedFileName = fileName;
    this.showOk = true;
  }
}
