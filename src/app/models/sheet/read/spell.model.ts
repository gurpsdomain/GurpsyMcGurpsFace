import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Spell {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('points', String)
  points: number;

  @JsonProperty('level', String)
  level: number;

  @JsonProperty('difficultyLevel', String)
  difficultyLevel: string;

  @JsonProperty('castingTime', String)
  castingTime: string;

  @JsonProperty('colleges', String)
  colleges: string;

  @JsonProperty('powerSource', String)
  powerSource: string;

  @JsonProperty('duration', String)
  duration: string;

  @JsonProperty('maintenanceCost', String)
  maintenanceCost: string;

  @JsonProperty('spellClasses', String)
  spellClasses: string;

  @JsonProperty('pageReference', String)
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
