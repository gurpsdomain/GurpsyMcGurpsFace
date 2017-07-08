import {UpdateSheet} from '../update/update-sheet.model';
export class Points {

  total: number;
  advantages: number;
  disadvantages: number;
  skills: number;
  spells: number;
  unspent: number;

  constructor(updateSheet: UpdateSheet) {
    this.total = undefined;
    this.advantages = undefined;
    this.disadvantages = undefined;
    this.skills = undefined;
    this.spells = undefined;
    this.unspent = undefined;
  }
}
