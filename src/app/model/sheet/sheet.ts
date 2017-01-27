import {PlayerInformation} from './player-information';
import {Identity} from './identity';
import {Points} from './points';

export class Sheet {
  description: string;
  identity: Identity;
  playerInformation: PlayerInformation;
  points: Points;

  constructor() {
  }
}
