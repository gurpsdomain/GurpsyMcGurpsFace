import {Template} from '../../../template/template.model';

export class PlayerInformation {

  player: string;
  campaign: string;
  createdOn: string;

  constructor(updateSheet: Template) {
    this.player = updateSheet.player;
    this.campaign = updateSheet.campaign;
    this.createdOn = updateSheet.createdOn;
  }
}
