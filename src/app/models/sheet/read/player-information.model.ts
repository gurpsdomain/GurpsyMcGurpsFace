import {JsonObject, JsonProperty} from 'json2typescript';
import {UpdateSheet} from '../update/update-sheet.model';

export class PlayerInformation {

  player: string;
  campaign: string;
  createdOn: string;

  constructor(updateSheet: UpdateSheet) {
    this.player = undefined;
    this.campaign = undefined;
    this.createdOn = undefined;
  }
}
