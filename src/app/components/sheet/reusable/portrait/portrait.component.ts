import {Component, ElementRef, ViewChild} from '@angular/core';
import {PortraitUpdaterDialogComponent} from '../../../dialog/model-updaters/portrait-updater-dialog/portrait-updater-dialog.component';
import {ModelUpdatingComponent} from '../../../model-updating.component';
import {MdDialogRef} from '@angular/material';
import {GurpsyComponent} from '../../../../gurpsy.component';

@Component({
  selector: 'gurpsy-portrait',
  templateUrl: 'portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    'portrait.component.scss'
  ]
})
export class PortraitComponent extends ModelUpdatingComponent {

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  private ALLOWED_FILE_EXTENSIONS = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
  private portraitDialogRef: MdDialogRef<PortraitUpdaterDialogComponent>;

  public updateRequested(): void {
    this.nativeInputFile.nativeElement.click();
  }

  public onNativeInputFileSelect($event): void {
    const file = $event.srcElement.files[0];

    if (this.isValid(file)) {
      this.openDialog(file);
    }
  }

  public openDialog(file: File): void {
    this.portraitDialogRef = this.dialog.open(PortraitUpdaterDialogComponent, {
      disableClose: false,
      width: GurpsyComponent.DIALOG_WIDTH
    });

    this.portraitDialogRef.componentInstance.template = this.template;
    this.portraitDialogRef.componentInstance.setFile(file);

    this.portraitDialogRef.afterClosed().subscribe(template => {
        this.updateModel(template);
        this.portraitDialogRef = null
      }
    );
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
