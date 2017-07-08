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
    this.advantages = this.enrichAdvantages(updateSheet);
    this.skills = this.enrichSkills(updateSheet);
    this.spells = this.enrichSpells(updateSheet);
    this.equipments = this.enrichEquipment(updateSheet);
    this.notes = this.enrichNotes(updateSheet);
  }

  private enrichAdvantages(updateSheet: UpdateSheet): Advantage[] {
    return [];
  }

  private enrichSkills(updateSheet: UpdateSheet): Skill[] {
    return [];
  }

  private enrichSpells(updateSheet: UpdateSheet): Spell[] {
    return [];
  }

  private enrichEquipment(updateSheet: UpdateSheet): Equipment[] {
    return [];
  }

  private enrichNotes(updateSheet: UpdateSheet): Note[] {
    const notes: Note[] = [];

    for (const note of updateSheet.notes) {
      const enrichedNote = new Note(note.name, note.note);
      notes.push(enrichedNote);
    }

    return notes;
  }
}
