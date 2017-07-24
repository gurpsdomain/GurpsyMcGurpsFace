export class Spell {

  name: string;
  points: number;
  level: number;
  difficultyLevel: string;
  castingTime: string;
  colleges: string;
  powerSource: string;
  duration: string;
  maintenanceCost: string;
  spellClasses: string;
  pageReference: string;

  constructor() {
    this.name = undefined;
    this.points = undefined;
    this.level = undefined;
    this.difficultyLevel = undefined;
    this.castingTime = undefined;
    this.colleges = undefined;
    this.powerSource = undefined;
    this.duration = undefined;
    this.maintenanceCost = undefined;
    this.spellClasses = undefined;
    this.pageReference = undefined;
  }
}
