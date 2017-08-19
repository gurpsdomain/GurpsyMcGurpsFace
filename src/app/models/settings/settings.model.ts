import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Settings {

  @JsonProperty('bodyContent', Number)
  bodyContent: Number;

  @JsonProperty('metrics', String)
  metrics: string;

  @JsonProperty('theme', String)
  theme: string;

  constructor() {
    this.bodyContent = 0;
    this.theme = '';
    this.metrics = '';
  }
}

