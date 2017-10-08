import {SheetTemplate} from '../../sheet-template/sheet-template.model';

export class Points {

  total: number;
  advantages: number;
  disadvantages: number;
  skills: number;
  spells: number;
  unspent: number;

  constructor(template: SheetTemplate) {
    this.enrichAdvantages(template);
    this.enrichDisadvantages(template);
    this.enrichSkills(template);
    this.enrichSpells(template);
    this.enrichTotal();
    this.enrichUnspent(template);
  }

  private enrichAdvantages(template: SheetTemplate) {
    this.advantages = 0;
  }

  private enrichDisadvantages(template: SheetTemplate) {
    this.disadvantages = 0;
  }

  private enrichSkills(template: SheetTemplate) {
    this.skills = 0;

    template.skills.forEach(skill => this.skills += skill.points);
  }

  private enrichSpells(template: SheetTemplate) {
    this.spells = 0;
  }

  private enrichTotal() {
    this.total = this.advantages + this.disadvantages + this.skills + this.spells;
  }

  private enrichUnspent(template: SheetTemplate) {
    this.unspent = template.basepoints - this.total;
  }
}
