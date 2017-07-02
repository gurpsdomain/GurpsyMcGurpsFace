import {Component, ElementRef, ViewChild} from '@angular/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {MdDialogRef, MdDialog} from '@angular/material';
import {PortraitSelectorDialogComponent} from '../../../dialog/portrait-selector-dialog/portrait-selector-dialog.component';
import {GurpsyComponent} from '../../../../gurpsy.component';
import {ModelUpdatingComponent} from '../../../model-updating.component';

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

  constructor(private dialog: MdDialog, modelService: ModelService) {
    super(modelService);
  }

  public selectPortrait(): void {
    if (this.editMode) {
      this.nativeInputFile.nativeElement.click();
    }
  }

  public onNativeInputFileSelect($event): void {
    const file = $event.srcElement.files[0];

    this.onOpenPortraitDialog(file);
  }

  /**
   * Call when the SettingsDialog should be shown.
   */
  public onOpenPortraitDialog(file: File): void {
    this.portraitDialogRef = this.dialog.open(PortraitSelectorDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.portraitDialogRef.componentInstance.file = file;

    this.portraitDialogRef.afterClosed().subscribe(
      this.portraitDialogRef = null
    );
  }
}
