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
import {UpdateSheet} from '../update/update-sheet.model';

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

  constructor(updateSheet: UpdateSheet) {
    this.metaData = new MetaData(updateSheet);
    this.points = new Points(updateSheet);
    this.attributes = new Attributes(updateSheet);
    this.secondaryCharacteristics = new SecondaryCharacteristics(updateSheet);
    this.damageResistances = new DamageResistance(updateSheet);
    this.advantages = [];
    this.skills = [];
    this.spells = [];
    this.equipments = [];
    this.notes = [];
  }
}
