import {PlayerInformation} from './player-information.model';
import {Identity} from './identity.model';
import {Description} from './description.model';
import {UpdateSheet} from '../update/update-sheet.model';

export class MetaData {

  playerInformation: PlayerInformation;
  identity: Identity;
  description: Description;

  constructor(updateSheet: UpdateSheet) {
    this.playerInformation = new PlayerInformation(updateSheet);
    this.identity = new Identity(updateSheet);
    this.description = new Description(updateSheet);
  }
}
