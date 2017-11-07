import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SheetTemplate, TemplateComparison} from '../../../../models/sheet-template/sheet-template.model';
import {SheetService} from '../../../../services/sheet/sheet.service';

export enum State {
  NONE, WARNING, INFO
}

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
  public stateEnum = State;

  public state = State.NONE;

  /**
   * Create a new Dialog
   *
   * @param {<OpenSheetDialogComponent>} dialogRef
   * @param {SheetService} sheetService
   */
  constructor(private dialogRef: MatDialogRef<OpenSheetDialogComponent>,
              private sheetService: SheetService) {
  }

  public onOk(): void {
    this.sheetService.loadNewTemplate(this.selectedSheet);
    this.dialogRef.close();
  }

  public onFileSelect(fileInput: Array<File>) {
    const file = fileInput[0];
    this.sheetService.createTemplateFromFile(file)
      .then(sheet => this.setSelectedSheet(sheet, file.name));
  }

  private setSelectedSheet(template: SheetTemplate, fileName: string): void {
    this.selectedSheet = template;
    this.selectedFileName = fileName;
    this.showOk = true;

    this.sheetService.getTemplateForId(template.id)
      .then(sameTemplate => this.compareNewTemplateToAlreadyLoadedTemplate(sameTemplate))
      .catch(any => this.setState(TemplateComparison.DIFFERENT));
  }

  private compareNewTemplateToAlreadyLoadedTemplate(template: SheetTemplate): void {
    const comparison = this.selectedSheet.equals(template);
    this.setState(comparison);
  }

  private setState(comparison: TemplateComparison): void {
    switch (comparison) {
      case TemplateComparison.DIFFERENT:
        this.state = State.NONE;
        break;
      case TemplateComparison.OLDER:
        this.state = State.WARNING;
        break;
      default:
        this.state = State.INFO;
    }
  }
}


