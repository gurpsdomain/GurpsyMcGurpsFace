import {UpdateSheet} from '../update/update-sheet.model';

export class PlayerInformation {

  player: string;
  campaign: string;
  createdOn: string;

  constructor(updateSheet: UpdateSheet) {
    this.player = updateSheet.player;
    this.campaign = updateSheet.campaign;
    this.createdOn = updateSheet.createdOn;
  }
}
