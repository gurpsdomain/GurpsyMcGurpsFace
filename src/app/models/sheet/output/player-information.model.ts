import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class PlayerInformation {

  @JsonProperty('player', String)
  player: string;

  @JsonProperty('campaign', String)
  campaign: string;

  @JsonProperty('createdOn', String)
  createdOn: string;


  constructor() {
    this.player = undefined;
    this.campaign = undefined;
    this.createdOn = undefined;
  }
}
