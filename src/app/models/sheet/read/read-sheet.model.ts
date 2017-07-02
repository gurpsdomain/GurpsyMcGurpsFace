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
import {JsonObject, JsonProperty} from 'json2typescript';
import {DamageResistance} from './damage-resistance.model';

@JsonObject
export class ReadSheet {

  @JsonProperty('metaData', MetaData)
  metaData: MetaData;

  @JsonProperty('points', Points)
  points: Points;

  @JsonProperty('attributes', Attributes)
  attributes: Attributes;

  @JsonProperty('secondaryCharacteristics', SecondaryCharacteristics)
  secondaryCharacteristics: SecondaryCharacteristics;

  @JsonProperty('damageResistances', DamageResistance)
  damageResistances: DamageResistance;

  @JsonProperty('advantages', [Advantage])
  advantages: Advantage[];

  @JsonProperty('disadvantages', [Disadvantage])
  disadvantages: Disadvantage[];

  @JsonProperty('skills', [Skill])
  skills: Skill[];

  @JsonProperty('spells', [Spell])
  spells: Spell[];

  @JsonProperty('equipments', [Equipment])
  equipments: Equipment[];

  @JsonProperty('notes', [Note])
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
