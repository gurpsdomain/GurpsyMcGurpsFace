import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelReadService} from '../../../services/model-read-service/model-read.service';
import {Sheet} from '../../../model/sheet/sheet';

@Component({
  selector: 'gurpsy-open-sheet-dialog',
  templateUrl: './open-sheet-dialog.component.html',
  styleUrls: ['./open-sheet-dialog.component.scss']
})
export class OpenSheetDialogComponent {

  public dialogRef: MdDialogRef<OpenSheetDialogComponent>;
  public modelReadService: ModelReadService;

  constructor(dialogRef: MdDialogRef<OpenSheetDialogComponent>, modelReadService: ModelReadService) {
    this.dialogRef = dialogRef;
    this.modelReadService = modelReadService;
  }

  onOpenSheet(): void {

    this.loadDefaultSheet();
    this.dialogRef.close();
  }

  private loadDefaultSheet(): void {

    let sheet: Sheet = this.modelReadService.getSheet();
    sheet.description = 'Description of the character';
    sheet.identity.name = 'Dai Blackthorn';
    sheet.identity.religion = 'Atheist';
    sheet.identity.title = 'Captain';
    sheet.playerInformation.campaign = 'Masters of Mayhem';
    sheet.playerInformation.creationDate = '01-01-2017';
    sheet.playerInformation.player = 'Steve Jackson';
    sheet.points.advantages = 1;
    sheet.points.attributes = 2;
    sheet.points.disadvantages = 3;
    sheet.points.earned = 5;
    sheet.points.quirks = 8;
    sheet.points.race = 13;
    sheet.points.spells = 21;
    sheet.points.skills = 34;
  }
}
