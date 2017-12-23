import {JsonObject, JsonProperty} from 'json2typescript';
import {ModifierTemplate} from '../modifier/modifier.model';

@JsonObject
export class AdvantageTemplate {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('levels', Number)
  levels?: number;

  @JsonProperty('modifiers', [ModifierTemplate])
  modifiers: ModifierTemplate[];

  constructor() {
    this.name = undefined;
    this.levels = undefined;
    this.modifiers = [];
  }
}
