import {SheetTemplate} from '../../sheet-template/sheet-template.model';

export class Points {

  total: number;
  attributes: number;
  advantages: number;
  disadvantages: number;
  quirks: number;
  race: number;
  skills: number;
  spells: number;
  unspent: number;

  constructor(template: SheetTemplate) {
    this.enrichAttributes(template);
    this.enrichAdvantages(template);
    this.enrichDisadvantages(template);
    this.enrichQuirks(template);
    this.enrichRace(template);
    this.enrichSkills(template);
    this.enrichSpells(template);
    this.enrichTotal(template);

    this.enrichUnspent(template);
  }

  private enrichAttributes(template: SheetTemplate) {
    this.attributes = 0;
  }

  private enrichAdvantages(template: SheetTemplate) {
    this.advantages = 0;
  }

  private enrichDisadvantages(template: SheetTemplate) {
    this.disadvantages = 0;
  }

  private enrichRace(template: SheetTemplate) {
    this.race = 0;
  }

  private enrichQuirks(template: SheetTemplate) {
    this.quirks = 0;
  }

  private enrichSkills(template: SheetTemplate) {
    this.skills = 0;

    template.skills.forEach(skill => this.skills += skill.points);
  }

  private enrichSpells(template: SheetTemplate) {
    this.spells = 0;
  }

  private enrichUnspent(template: SheetTemplate) {
    let available = template.basepoints;

    template.rewards.forEach(reward => available += reward.points);

    this.unspent = available - this.getTotalUsed(template);
  }

  private enrichTotal(template: SheetTemplate) {
    this.total = this.getTotalUsed(template);
  }

  private getTotalUsed(template: SheetTemplate): number {
    let used = 0;

    if (!this.attributes) {
      this.enrichAttributes(template);
    }
    if (!this.advantages) {
      this.enrichAdvantages(template);
    }
    if (!this.quirks) {
      this.enrichQuirks(template);
    }
    if (!this.disadvantages) {
      this.enrichDisadvantages(template);
    }
    if (!this.skills) {
      this.enrichSkills(template);
    }
    if (!this.spells) {
      this.enrichSpells(template);
    }

    used = used + this.attributes + this.advantages + this.disadvantages + this.quirks + this.spells + this.skills;

    return used;
  }
}
