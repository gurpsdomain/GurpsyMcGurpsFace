import {Component, ElementRef, ViewChild} from '@angular/core';
import {PortraitUpdaterDialogComponent} from '../../../dialog/model-updaters/portrait-updater-dialog/portrait-updater-dialog.component';
import {ModelUpdatingComponent} from '../../../model-updating.component';
import {MdDialogRef} from '@angular/material';
import {GurpsyComponent} from '../../../../gurpsy.component';
import {ReadSheet} from '../../../../models/sheet/read/read-sheet.model';

@Component({
  selector: 'gurpsy-portrait',
  templateUrl: 'portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    'portrait.component.scss'
  ]
})
export class PortraitComponent extends ModelUpdatingComponent {

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  // readSheet: ReadSheet;

  private portraitDialogRef: MdDialogRef<PortraitUpdaterDialogComponent>;

  // ngOnInit(): void {
  //   super.ngOnInit();
  //
  //   this.modelService.getReadModel().then(readModel => this.readSheet = readModel);
  //   this.modelService.modelChange$.subscribe(readModel => this.readSheet = readModel);
  // }

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
        this.updatePortrait(result);
        this.portraitDialogRef = null
      }
    );
  }

  private updatePortrait(portrait: string): void {
    this.updateSheet.portrait = portrait;
    this.updateModel();
  }

  private isValid(file: File): boolean {
    return true;
  }
}
