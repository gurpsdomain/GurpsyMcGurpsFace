import {TemplateDM} from '../template/template.model';
export class Points {

  total: number;
  advantages: number;
  disadvantages: number;
  skills: number;
  spells: number;
  unspent: number;

  constructor(template: TemplateDM) {
    this.total = undefined;
    this.advantages = undefined;
    this.disadvantages = undefined;
    this.skills = undefined;
    this.spells = undefined;
    this.unspent = undefined;
  }
}
