import {Advantage} from './advantage.model';
import {Disadvantage} from './disadvantage.model';
import {Skill} from './skill.model';
import {Spell} from './spell.model';
import {Equipment} from './equipment.model';
import {Note} from './note.model';
import {MetaData} from './metadata/metadata.model';
import {Points} from './points.model';
import {Attributes} from './attributes.model';
import {SecondaryCharacteristics} from './secondary-characteristics.model';
import {DamageResistance} from './damage-resistance.model';
import {Template} from '../template/template.model';

export class Sheet {

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

  constructor(template: Template) {
    this.metaData = new MetaData(template);
    this.points = new Points(template);
    this.attributes = new Attributes(template);
    this.secondaryCharacteristics = new SecondaryCharacteristics(template);
    this.damageResistances = new DamageResistance(template);
    this.advantages = this.enrichAdvantages(template);
    this.skills = this.enrichSkills(template);
    this.spells = this.enrichSpells(template);
    this.equipments = this.enrichEquipment(template);
    this.notes = this.enrichNotes(template);
  }

  private enrichAdvantages(template: Template): Advantage[] {
    return [];
  }

  private enrichSkills(template: Template): Skill[] {
    return [];
  }

  private enrichSpells(template: Template): Spell[] {
    return [];
  }

  private enrichEquipment(template: Template): Equipment[] {
    return [];
  }

  private enrichNotes(template: Template): Note[] {
    const notes: Note[] = [];

    for (const note of template.notes) {
      const enrichedNote = new Note(note.name, note.note);
      notes.push(enrichedNote);
    }

    return notes;
  }
}
