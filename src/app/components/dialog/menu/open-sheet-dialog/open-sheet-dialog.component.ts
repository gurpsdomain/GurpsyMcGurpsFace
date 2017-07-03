import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {UpdateSheet} from '../../../../models/sheet/update/update-sheet.model';

@Component({
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: ['../../dialog.component.scss',
              './open-sheet-dialog.component.scss'
  ]
})
export class OpenSheetDialogComponent {

  public showOk = false;
  public selectedFileName = '';
  public selectedSheet: UpdateSheet;
  public previouslyOpenedSheets: UpdateSheet[] = [];

  private selectedPreviousSheet: UpdateSheet = null;

  constructor(private dialogRef: MdDialogRef<OpenSheetDialogComponent>,
              private modelService: ModelService,
              private storageService: StorageService) {

    this.initPreviouslyOpenedSheetList();
  }

  public onOk(): void {
    this.modelService.loadSheet(this.selectedSheet, true);
    this.dialogRef.close();
  }

  public onFileSelect(fileInput: Array<File>) {
    const file = fileInput[0];
    this.modelService.loadSheetFromFile(file)
      .then(sheet => this.setSelectedSheet(sheet, file.name));
  }

  public onPreviousSheetSelected(sheet: UpdateSheet) {
    this.selectedPreviousSheet = sheet;
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setPreviouslyOpenedSheets(sheets));
  }

  private setPreviouslyOpenedSheets(sheets: UpdateSheet[]): void {
    this.previouslyOpenedSheets = sheets;
  }

  private setSelectedSheet(sheet: UpdateSheet, fileName: string): void {
    this.selectedSheet = sheet;
    this.selectedFileName = fileName;
    this.showOk = true;
  }
}
