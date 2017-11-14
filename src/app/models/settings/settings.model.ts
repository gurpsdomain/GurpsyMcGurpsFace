import {JsonObject, JsonProperty} from 'json2typescript';
import {Theme} from './enums/theme.enum';

@JsonObject
export class Settings {

  @JsonProperty('theme', String, false)
  theme: Theme;

  constructor() {
    this.theme = Theme.NIGHT;
  }
}

