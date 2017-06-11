import {JsonObject, JsonProperty} from 'json2typescript';
import {Modifier} from './modifier.model';

@JsonObject
export class Advantage {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('points', Number)
  points: number;

  @JsonProperty('pageReference', String)
  pageReference: string;

  @JsonProperty('modifiers', [Modifier])
  modifiers: Modifier[];

  @JsonProperty('level', Number)
  level?: number;

  constructor() {
    this.name = undefined;
    this.points = undefined;
    this.pageReference = undefined;
    this.modifiers = []
    this.level = undefined;
  }
}
