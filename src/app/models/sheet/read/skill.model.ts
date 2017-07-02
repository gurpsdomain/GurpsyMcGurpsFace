import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Skill {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('points', Number)
  points: number;


  @JsonProperty('level', Number)
  level: number;

  @JsonProperty('pageReference', String)
  pageReference: string;

  @JsonProperty('controllingAttribute', String)
  controllingAttribute: string;

  @JsonProperty('difficultyLevel', String)
  difficultyLevel: string;

  constructor() {
    this.name = undefined;
    this.points = undefined;
    this.level = undefined;
    this.pageReference = undefined;
    this.controllingAttribute = undefined;
    this.difficultyLevel = undefined;
  }
}
