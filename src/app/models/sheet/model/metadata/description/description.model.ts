import {Template} from '../../../template/template.model';
export class Description {

  race: string;
  gender: string;
  age: number;
  birthday: string;
  height: number;
  weight: number;
  TL: number;
  hair: string;
  eyes: string;
  skin: string;
  hand: string;

  constructor(template: Template) {
    this.race = template.race;
    this.gender = template.gender;
    this.age = template.age;
    this.birthday = template.birthday;
    this.height = template.height;
    this.weight = template.weight;
    this.TL = template.TL;
    this.hair = template.hair;
    this.eyes = template.eyes;
    this.skin = template.skin;
    this.hand = template.hand;
  }
}
