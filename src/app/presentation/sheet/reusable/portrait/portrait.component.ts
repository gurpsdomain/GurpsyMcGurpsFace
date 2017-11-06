import {Component, ElementRef, ViewChild} from '@angular/core';
import {PortraitUpdaterDialogComponent} from '../../../dialoges/template-updaters/portrait-updater/portrait-updater-dialog.component';
import {SheetUpdatingComponent} from '../../../sheet-updating.component';
import {CustomDialogInitiatingComponent} from '../../../custom-dialog-initiating.component';

@Component({
  selector: 'gurpsy-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    'portrait.component.scss'
  ]
})
export class PortraitComponent extends SheetUpdatingComponent<PortraitUpdaterDialogComponent> implements CustomDialogInitiatingComponent {

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  private ALLOWED_FILE_EXTENSIONS = /(\.jpg|\.jpeg|\.gif|\.png)$/i;

  public updateRequested(): void {
    this.nativeInputFile.nativeElement.click();
  }

  public onNativeInputFileSelect($event): void {
    const file = $event.srcElement.files[0];

    if (this.isValid(file)) {
      this.openDialog(file);
    }
  }

  public setComponentType(): void {
    this.dialogType = PortraitUpdaterDialogComponent;
  }

  protected addDataToDialog(data?: any) {
    this.dialogRef.componentInstance.setFile(data);
    super.addDataToDialog();
  }

  private isValid(file: File): boolean {
    return file && this.isValidExtension(file)
  }

  private isValidExtension(file: File): boolean {
    const matchArray: RegExpMatchArray = file.name.match(this.ALLOWED_FILE_EXTENSIONS);
    const isMatch = matchArray.index !== -1;

    return isMatch
  }
}
