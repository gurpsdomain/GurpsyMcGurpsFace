import {PlayerInformation} from './player-information.model';
import {Identity} from './identity.model';
import {Description} from './description.model';
import {Template} from '../template/template.model';

export class MetaData {

  playerInformation: PlayerInformation;
  identity: Identity;
  description: Description;

  constructor(updateSheet: Template) {
    this.playerInformation = new PlayerInformation(updateSheet);
    this.identity = new Identity(updateSheet);
    this.description = new Description(updateSheet);
  }
}
