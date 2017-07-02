import {JsonObject, JsonProperty} from 'json2typescript';
import {Modifier} from './modifier.model';

@JsonObject
export class Disadvantage {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('points', Number)
  points: number;

  @JsonProperty('pageReference', String)
  pageReference: string;

  @JsonProperty('modifiers', [Modifier])
  modifiers: Modifier[];

  constructor() {
    this.name = undefined;
    this.points = undefined;
    this.pageReference = undefined;
    this.modifiers = []
  }
}
