import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class BasicLift {

  @JsonProperty('imperial', String)
  imperial: string;

  @JsonProperty('realMetric', String)
  realMetric: string;

  @JsonProperty('gameMetric', String)
  gameMetric: string;

  constructor() {
    this.imperial = undefined;
    this.realMetric = undefined;
    this.gameMetric = undefined;
  }
}
