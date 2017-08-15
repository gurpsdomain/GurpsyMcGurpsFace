import {SheetTemplate} from '../sheet-template/sheet-template.model';
export class Attributes {

  strength: number;
  dexterity: number;
  health: number;
  intelligence: number;

  constructor(template: SheetTemplate) {
    this.strength = 10;
    this.dexterity = 10;
    this.health = 10;
    this.intelligence = 10;
  }
}
