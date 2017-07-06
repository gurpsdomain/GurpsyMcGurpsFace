import {PlayerInformation} from './player-information.model';
import {Identity} from './identity.model';
import {Description} from './description.model';

export class MetaData {

  playerInformation: PlayerInformation;
  identity: Identity;
  description: Description;

  constructor() {
    this.playerInformation = new PlayerInformation();
    this.identity = new Identity();
    this.description = new Description();
  }
}
