import {Template} from '../template/template.model';
export class Points {

  total: number;
  advantages: number;
  disadvantages: number;
  skills: number;
  spells: number;
  unspent: number;

  constructor(template: Template) {
    this.total = undefined;
    this.advantages = undefined;
    this.disadvantages = undefined;
    this.skills = undefined;
    this.spells = undefined;
    this.unspent = undefined;
  }
}
