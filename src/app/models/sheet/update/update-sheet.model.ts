import {JsonObject, JsonProperty} from 'json2typescript';
import {Note} from './note.model';
import {Equipment} from './equipment.model';
import {Spell} from './spell.model';
import {Skill} from './skill.model';
import {Disadvantage} from './disadvantage.model';
import {Advantage} from './advantage.model';

@JsonObject
export class UpdateSheet {

  @JsonProperty('portrait', String, true)
  portrait: string;

  @JsonProperty('player', String, true)
  player: string;

  @JsonProperty('campaign', String, true)
  campaign: string;

  @JsonProperty('createdOn', String, true)
  createdOn: string;

  @JsonProperty('name', String, true)
  name: string;

  @JsonProperty('title', String, true)
  title: string;

  @JsonProperty('religion', String, true)
  religion: string;

  @JsonProperty('race', String, true)
  race: string;

  @JsonProperty('gender', String, true)
  gender: string;

  @JsonProperty('age', Number, true)
  age: number;

  @JsonProperty('birthday', String, true)
  birthday: string;

  @JsonProperty('height', String, true)
  height: string;

  @JsonProperty('weight', String, true)
  weight: string;

  @JsonProperty('size', String, true)
  size: string;

  @JsonProperty('TL', Number, true)
  TL: number;

  @JsonProperty('hair', String, true)
  hair: string;

  @JsonProperty('eyes', String, true)
  eyes: string;

  @JsonProperty('skin', String, true)
  skin: string;

  @JsonProperty('hand', String, true)
  hand: string;

  @JsonProperty('basepoints', Number, true)
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

  constructor() {
    this.portrait = undefined;
    this.player = undefined;
    this.campaign = undefined;
    this.createdOn = undefined;
    this.name = undefined;
    this.title = undefined;
    this.religion = undefined;
    this.race = undefined;
    this.gender = undefined;
    this.age = undefined;
    this.birthday = undefined;
    this.height = undefined;
    this.weight = undefined;
    this.size = undefined;
    this.TL = undefined;
    this.hair = undefined;
    this.eyes = undefined;
    this.skin = undefined;
    this.hand = undefined;
    this.basepoints = undefined;
    this.rewards = [];
    this.advantages = [];
    this.disadvantages = [];
    this.skills = [];
    this.spells = [];
    this.equipments = [];
    this.notes = [];
  }
}
