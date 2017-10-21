import {PlayerInformation} from './player-information/player-information.model';
import {Identity} from './identity/identity.model';
import {Description} from './description/description.model';
import {SheetTemplate} from '../../sheet-template/sheet-template.model';

export class MetaData {

  playerInformation: PlayerInformation;
  identity: Identity;
  description: Description;

  constructor(template: SheetTemplate) {
    this.playerInformation = new PlayerInformation(template);
    this.identity = new Identity(template);
    this.description = new Description(template);
  }
}
