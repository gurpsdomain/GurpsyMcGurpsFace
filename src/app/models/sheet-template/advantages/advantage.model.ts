import {JsonObject, JsonProperty} from 'json2typescript';
import {Modifier} from '../modifier/modifier.model';

@JsonObject
export class Advantage {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('levels', Number)
  levels?: number;

  @JsonProperty('modifiers', [Modifier])
  modifiers: Modifier[];

  constructor() {
    this.name = undefined;
    this.levels = undefined;
    this.modifiers = [];
  }
}
