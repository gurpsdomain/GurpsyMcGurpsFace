import {SheetTemplate} from '../sheet-template/sheet-template.model';
export class Points {

  total: number;
  advantages: number;
  disadvantages: number;
  skills: number;
  spells: number;
  unspent: number;

  constructor(template: SheetTemplate) {
    this.total = undefined;
    this.advantages = undefined;
    this.disadvantages = undefined;
    this.skills = undefined;
    this.spells = undefined;
    this.unspent = undefined;
  }
}
