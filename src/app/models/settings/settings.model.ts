import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Settings {

  @JsonProperty('metrics', String)
  metrics: string;

  @JsonProperty('theme', String)
  theme: string;

  constructor() {
    this.theme = '';
    this.metrics = '';
  }
}

