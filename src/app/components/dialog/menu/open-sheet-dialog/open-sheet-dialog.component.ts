import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {Template} from '../../../../models/sheet/template/template.model';

@Component({
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: ['../../dialog.component.scss',
              './open-sheet-dialog.component.scss'
  ]
})
export class OpenSheetDialogComponent {

  public showOk = false;
  public selectedFileName = '';
  public selectedSheet: Template;
  public previouslyOpenedSheets: Template[] = [];

  private selectedPreviousSheet: Template = null;

  constructor(private dialogRef: MdDialogRef<OpenSheetDialogComponent>,
              private modelService: ModelService,
              private storageService: StorageService) {

    this.initPreviouslyOpenedSheetList();
  }

  public onOk(): void {
    this.modelService.loadTemplate(this.selectedSheet, true);
    this.dialogRef.close();
  }

  public onFileSelect(fileInput: Array<File>) {
    const file = fileInput[0];
    this.modelService.createTemplateFromFile(file)
      .then(sheet => this.setSelectedSheet(sheet, file.name));
  }

  public onPreviousSheetSelected(sheet: Template) {
    this.selectedPreviousSheet = sheet;
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setPreviouslyOpenedSheets(sheets));
  }

  private setPreviouslyOpenedSheets(sheets: Template[]): void {
    this.previouslyOpenedSheets = sheets;
  }

  private setSelectedSheet(sheet: Template, fileName: string): void {
    this.selectedSheet = sheet;
    this.selectedFileName = fileName;
    this.showOk = true;
  }
}
