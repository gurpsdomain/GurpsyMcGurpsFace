import {JsonObject, JsonProperty} from 'json2typescript';

export class PlayerInformation {

  player: string;
  campaign: string;
  createdOn: string;

  constructor() {
    this.player = undefined;
    this.campaign = undefined;
    this.createdOn = undefined;
  }
}
