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

    this.portraitDialogRef.componentInstance.setFile(file);

    this.portraitDialogRef.afterClosed().subscribe(result => {
        this.updateModel(result);
        this.portraitDialogRef = null
      }
    );
  }

  private updateModel(portrait: string): void {
    console.log('New portait selected: ', portrait);
  }

  private isValid(file: File): boolean {
    return true;
  }
}
