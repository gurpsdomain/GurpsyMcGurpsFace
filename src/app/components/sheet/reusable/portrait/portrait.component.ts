import {Component, ElementRef, ViewChild} from '@angular/core';
import {PortraitSelectorDialogComponent} from '../../../dialog/portrait-selector-dialog/portrait-selector-dialog.component';
import {ModelUpdatingComponent} from '../../../model-updating.component';
import {MdDialogRef, MdDialog} from '@angular/material';
import {GurpsyComponent} from '../../../../gurpsy.component';
import {ModelService} from '../../../../services/front-end/model/model.service';

@Component({
  selector: 'gurpsy-portrait',
  templateUrl: 'portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    'portrait.component.scss'
  ]
})
export class PortraitComponent extends ModelUpdatingComponent {

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  private portraitDialogRef: MdDialogRef<PortraitSelectorDialogComponent>;

  public updateRequested(): void {
    this.nativeInputFile.nativeElement.click();
  }

  public onNativeInputFileSelect($event): void {
    const file = $event.srcElement.files[0];

    this.openDialog(file);
  }

  public openDialog(file: File): void {
    this.portraitDialogRef = this.dialog.open(PortraitSelectorDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.portraitDialogRef.componentInstance.data = file;

    this.portraitDialogRef.afterClosed().subscribe(
      this.portraitDialogRef = null
    );
  }
}
