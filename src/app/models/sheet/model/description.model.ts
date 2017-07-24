import {Template} from '../template/template.model';
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

  constructor(updateSheet: Template) {
    this.race = updateSheet.race;
    this.gender = updateSheet.gender;
    this.age = updateSheet.age;
    this.birthday = updateSheet.birthday;
    this.height = updateSheet.height;
    this.weight = updateSheet.weight;
    this.TL = updateSheet.TL;
    this.hair = updateSheet.hair;
    this.eyes = updateSheet.eyes;
    this.skin = updateSheet.skin;
    this.hand = updateSheet.hand;
  }
}
