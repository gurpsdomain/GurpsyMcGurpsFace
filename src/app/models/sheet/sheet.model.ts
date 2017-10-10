import {Advantage} from './advantage.model';
import {Disadvantage} from './disadvantage.model';
import {Skill} from './skill.model';
import {Spell} from './spell.model';
import {Equipment} from './equipment.model';
import {Note} from './note.model';
import {MetaData} from './metadata/metadata.model';
import {Points} from './points/points.model';
import {Attributes} from './attributes.model';
import {SecondaryCharacteristics} from './secondary-characteristics/secondary-characteristics.model';
import {DamageResistance} from './damage-resistance.model';
import {SheetTemplate} from '../sheet-template/sheet-template.model';

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

  constructor(template: SheetTemplate) {
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

  private enrichAdvantages(template: SheetTemplate): Advantage[] {
    return [];
  }

  private enrichSkills(template: SheetTemplate): Skill[] {
    return [];
  }

  private enrichSpells(template: SheetTemplate): Spell[] {
    return [];
  }

  private enrichEquipment(template: SheetTemplate): Equipment[] {
    return [];
  }

  private enrichNotes(template: SheetTemplate): Note[] {
    const notes: Note[] = [];

    for (const note of template.notes) {
      const enrichedNote = new Note(note.name, note.note);
      notes.push(enrichedNote);
    }

    return notes;
  }
}
