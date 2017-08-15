import {SheetTemplate} from '../../../sheet-template/sheet-template.model';

export class PlayerInformation {

  player: string;
  campaign: string;
  createdOn: Date;
  lastModified: Date;

  constructor(updateSheet: SheetTemplate) {
    this.player = updateSheet.player;
    this.campaign = updateSheet.campaign;
    this.createdOn = updateSheet.createdOn;
    this.lastModified = updateSheet.lastModified;
  }
}
