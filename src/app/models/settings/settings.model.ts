import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Settings {

  @JsonProperty('theme', String)
  theme: string;

  constructor() {
    this.theme = '';
  }
}

