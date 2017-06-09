import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Skill {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('points', String)
  points: number;

  constructor() {
    this.name = undefined;
    this.points = undefined;
  }
}
