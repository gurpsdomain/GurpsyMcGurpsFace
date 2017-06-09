import {JsonObject, JsonProperty} from 'json2typescript';
import {Note} from './note.model';
import {Equipment} from './equipment.model';
import {Spell} from './spell.model';
import {Skill} from './skill.model';
import {Disadvantage} from './disadvantage.model';
import {Advantage} from './advantage.model';

@JsonObject
export class InputSheet {

  @JsonProperty('player', String)
  player: string;

  @JsonProperty('campaign', String)
  campaign: string;

  @JsonProperty('createdOn', String)
  createdOn: string;

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('title', String)
  title: string;

  @JsonProperty('religion', String)
  religion: string;

  @JsonProperty('race', String)
  race: string;

  @JsonProperty('gender', String)
  gender: string;

  @JsonProperty('age', Number)
  age: number;

  @JsonProperty('birthday', String)
  birthday: string;

  @JsonProperty('height', String)
  height: string;

  @JsonProperty('weight', String)
  weight: string;

  @JsonProperty('size', String)
  size: string;

  @JsonProperty('TL', Number)
  TL: number;

  @JsonProperty('hair', String)
  hair: string;

  @JsonProperty('eyes', String)
  eyes: string;

  @JsonProperty('skin', String)
  skin: string;

  @JsonProperty('hand', String)
  hand: string;

  @JsonProperty('basepoints', Number)
  basepoints: number;

  @JsonProperty('rewards', [Number])
  rewards: number[];

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
}
