import {Template} from '../../../template/template.model';
import {Weight} from '../../units/weight/weight.model';
import {Height} from '../../units/height/height.model';

export class Description {

  race: string;
  gender: string;
  age: number;
  birthday: string;
  height: Height;
  weight: Weight;
  tl: number;
  hair: string;
  eyes: string;
  skin: string;
  hand: string;

  constructor(template: Template) {
    this.race = template.race;
    this.gender = template.gender;
    this.age = template.age;
    this.birthday = template.birthday;
    this.height = new Height(template);
    this.weight = new Weight(template);
    this.tl = template.tl;
    this.hair = template.hair;
    this.eyes = template.eyes;
    this.skin = template.skin;
    this.hand = template.hand;
  }
}
