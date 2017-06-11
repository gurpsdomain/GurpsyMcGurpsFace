import {JsonObject, JsonProperty} from 'json2typescript';
import {PlayerInformation} from './player-information.model';
import {Identity} from './identity.model';
import {Description} from './description.model';

@JsonObject
export class MetaData {

  @JsonProperty('playerInformation', PlayerInformation)
  playerInformation: PlayerInformation;

  @JsonProperty('identity', Identity)
  identity: Identity;

  @JsonProperty('description', Description)
  description: Description;

  constructor() {
    this.playerInformation = new PlayerInformation();
    this.identity = new Identity();
    this.description = new Description();
  }
}
