import {JsonObject, JsonProperty} from 'json2typescript';
import {UnitConverter} from '../../repositories/settings/converters/unit/unit.converter';
import {Unit} from './enums/unit.enum';

@JsonObject
export class Settings {

  @JsonProperty('unit', UnitConverter)
  unit: Unit;

  @JsonProperty('theme', String)
  theme: string;

  constructor() {
    this.theme = '';
    this.unit = undefined;
  }
}

