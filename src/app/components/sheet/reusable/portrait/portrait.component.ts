import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {OutputSheet} from '../../../../models/sheet/output/output.sheet.model';
import {MdDialogRef, MdDialog} from '@angular/material';
import {PortraitSelectorDialogComponent} from '../../../dialog/portrait-selector-dialog/portrait-selector-dialog.component';
import {GurpsyComponent} from '../../../../gurpsy.component';

@Component({
  selector: 'gurpsy-portrait',
  templateUrl: 'portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    'portrait.component.scss'
  ]
})
export class PortraitComponent implements OnInit {

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  private portraitDialogRef: MdDialogRef<PortraitSelectorDialogComponent>;

  public sheet: OutputSheet;
  public editMode: boolean;

  constructor(private dialog: MdDialog,
              private modelService: ModelService) {
  }

  ngOnInit(): void {
    this.initModel();
    this.initEditMode();
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

  private initEditMode(): void {
    this.editMode = this.modelService.editMode;
    this.modelService.editModeChange$.subscribe(editMode => this.editMode = editMode);
  }

  private initModel(): void {
    this.sheet = this.modelService.getOutputModel();
    this.modelService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
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
