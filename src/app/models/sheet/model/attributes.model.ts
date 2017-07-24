import {Template} from '../template/template.model';
export class Attributes {

  strength: number;
  dexterity: number;
  health: number;
  intelligence: number;

  constructor(updateSheet: Template) {
    this.strength = 10;
    this.dexterity = 10;
    this.health = 10;
    this.intelligence = 10;
  }
}
