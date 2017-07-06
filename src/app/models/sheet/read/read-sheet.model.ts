import {Advantage} from './advantage.model';
import {Disadvantage} from './disadvantage.model';
import {Skill} from './skill.model';
import {Spell} from './spell.model';
import {Equipment} from './equipment.model';
import {Note} from './note.model';
import {MetaData} from './metadata.model';
import {Points} from './points.model';
import {Attributes} from './attributes.model';
import {SecondaryCharacteristics} from './secondary-characteristics.model';
import {DamageResistance} from './damage-resistance.model';

export class ReadSheet {

  metaData: MetaData;
  points: Points;
  attributes: Attributes;
  secondaryCharacteristics: SecondaryCharacteristics;
  damageResistances: DamageResistance;
  advantages: Advantage[];
  disadvantages: Disadvantage[];
  skills: Skill[];
  spells: Spell[];
  equipments: Equipment[];
  notes: Note[];

  constructor() {
    this.metaData = new MetaData();
    this.points = new Points();
    this.attributes = new Attributes();
    this.secondaryCharacteristics = new SecondaryCharacteristics();
    this.damageResistances = new DamageResistance();
    this.advantages = [];
    this.skills = [];
    this.spells = [];
    this.equipments = [];
    this.notes = [];
  }
}
