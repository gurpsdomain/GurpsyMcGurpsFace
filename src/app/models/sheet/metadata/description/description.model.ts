import {SheetTemplate} from '../../../sheet-template/sheet-template.model';
import {Weight} from '../../units/weight/weight.model';

export class Description {

  race: string;
  gender: string;
  age: number;
  birthday: string;
  height: number;
  weight: Weight;
  tl: number;
  hair: string;
  eyes: string;
  skin: string;
  hand: string;

  constructor(template: SheetTemplate) {
    this.race = template.race;
    this.gender = template.gender;
    this.age = template.age;
    this.birthday = template.birthday;
    this.height = template.height;
    this.weight = new Weight(template);
    this.tl = template.tl;
    this.hair = template.hair;
    this.eyes = template.eyes;
    this.skin = template.skin;
    this.hand = template.hand;
  }
}
