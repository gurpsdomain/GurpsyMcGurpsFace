import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Move {

  @JsonProperty('none', Number)
  none: number;

  @JsonProperty('light', Number)
  light: number;

  @JsonProperty('medium', Number)
  medium: number;

  @JsonProperty('heavy', Number)
  heavy: number;

  @JsonProperty('xHeavy', Number)
  xHeavy: number;

  constructor() {
    this.none = undefined;
    this.light = undefined;
    this.medium = undefined;
    this.heavy = undefined;
    this.xHeavy = undefined;
  }
}
