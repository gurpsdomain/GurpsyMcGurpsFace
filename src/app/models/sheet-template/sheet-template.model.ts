import {JsonObject, JsonProperty} from 'json2typescript';
import {Note} from './note/note.model';
import {Equipment} from './equipment/equipment.model';
import {Spell} from './spell/spell.model';
import {Skill} from './skill/skill.model';
import {Disadvantage} from './disadvantage/disadvantage.model';
import {Advantage} from './advantages/advantage.model';
import {Reward} from './reward/reward.model';
import {MetaData} from './metadata/metadata.model';

@JsonObject
export class SheetTemplate {

  @JsonProperty('portrait', String, true)
  portrait: string;

  @JsonProperty('player', String, true)
  player: string;

  @JsonProperty('campaign', String, true)
  campaign: string;

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

  @JsonProperty('height', Number, true)
  height: number;

  @JsonProperty('weight', Number, true)
  weight: number;

  @JsonProperty('size', Number, true)
  size: number;

  @JsonProperty('tl', Number, true)
  tl: number;

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

  @JsonProperty('rewards', [Reward])
  rewards: Reward[];

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

  @JsonProperty('metadata', MetaData, false)
  metaData: MetaData;

  constructor() {
    this.portrait = 'assets/images/empty-portrait.png';
    this.player = '';
    this.campaign = '';
    this.name = '';
    this.title = '';
    this.religion = '';
    this.race = '';
    this.gender = '';
    this.age = undefined;
    this.birthday = undefined;
    this.height = undefined;
    this.weight = undefined;
    this.size = undefined;
    this.tl = undefined;
    this.hair = '';
    this.eyes = '';
    this.skin = '';
    this.hand = '';
    this.basepoints = 100;
    this.rewards = [];
    this.advantages = [];
    this.disadvantages = [];
    this.skills = [];
    this.spells = [];
    this.equipments = [];
    this.notes = [];
    this.metaData = new MetaData();
  }

  /**
   * Add a new Reward with the given points and date
   *
   * @param {number} points
   * @param {Date} date
   */
  public addReward(points: number, date: Date): void {

    const reward = new Reward();
    reward.points = points;
    reward.date = date;

    this.rewards.push(reward);
  }

  /**
   * Return a valid filename for this template.
   *
   * This filename will be of the form
   *
   *      characterName - lastModifiedDate
   *
   * @return {string}
   */
  public getFileName(): string {
    let fileName = this.name;

    fileName = fileName.concat('-');

    if (this.metaData.lastModified) {
      fileName = fileName.concat(this.metaData.lastModified.toDateString());
    } else {
      fileName = fileName.concat(this.metaData.createdOn.toDateString());
    }
    return fileName;
  }

  /**
   * Return the Total Points of this Template. This will mean the Base Points
   * added to the point total of all Rewards.
   *
   * @return {number}
   */
  public getTotalPoints(): number {
    let totalPoints = this.basepoints;

    this.rewards.forEach(reward => totalPoints += reward.points);

    return totalPoints;
  }

  /**
   * Compare this SheetTemplate.
   *
   * Comparison is based on both the id and the lastModified date.
   *
   * @param {SheetTemplate} other
   * @return {TemplateComparison}
   */
  public equals(other: SheetTemplate): TemplateComparison {
    if (this.metaData.id !== other.metaData.id) {
      return TemplateComparison.DIFFERENT;
    }

    if (this.metaData.lastModified > other.metaData.lastModified) {
      return TemplateComparison.NEWER
    } else if (this.metaData.lastModified < other.metaData.lastModified) {
      return TemplateComparison.OLDER
    } else {
      return TemplateComparison.SAME;
    }
  }

  /**
   * Return the createdOn date of the SheetTemplate.
   * @return {Date}
   */
  public get createdOn(): Date {
    return this.metaData.createdOn;
  }

  /**
   * Set the createdOn date of this SheetTemplate.
   * @param {Date} createdOn
   */
  public set createdOn(createdOn: Date) {
    this.metaData.createdOn = createdOn;
  }

  /**
   * Return the id of this SheetTemplate.
   *
   * @return {string}
   */
  public get id(): string {
    return this.metaData.id;
  }

  /**
   * Set the id of the SheetTemplate.
   * @param {string} id
   * @return {string}
   */
  public set id(id: string) {
    this.metaData.id = id;
  }

  /**
   * Return the lastModified date of this SheetTemplate.
   * @return {Date}
   */
  public get lastModified(): Date {
    return this.metaData.lastModified;
  }

  /**
   * Set the lastModified date of this SheetTemplate.
   * @param {Date} lastModified
   */
  public set lastModified(lastModified: Date) {
    this.metaData.lastModified = lastModified;
  }
}

export enum TemplateComparison {
  OLDER, NEWER, SAME, DIFFERENT
}
