import {Component, ElementRef, ViewChild} from '@angular/core';
import {PortraitUpdaterDialogComponent} from '../../../dialog/template-updaters/portrait-updater-dialog/portrait-updater-dialog.component';
import {TemplateUpdatingComponent} from '../../../template-updating.component';

@Component({
  selector: 'gurpsy-portrait',
  templateUrl: 'portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    'portrait.component.scss'
  ]
})
export class PortraitComponent extends TemplateUpdatingComponent<PortraitUpdaterDialogComponent> {

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

  protected addDataToDialog(data?: any) {
    this.dialogRef.componentInstance.setFile(data);
    super.addDataToDialog();
  }

  protected setComponentType(): void {
    this.dialogType = PortraitUpdaterDialogComponent;
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
