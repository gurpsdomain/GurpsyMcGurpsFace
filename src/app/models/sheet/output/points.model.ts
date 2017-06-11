import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Points {

  @JsonProperty('total', Number)
  total: number;

  @JsonProperty('advantages', Number)
  advantages: number;

  @JsonProperty('disadvantages', Number)
  disadvantages: number;

  @JsonProperty('skills', Number)
  skills: number;

  @JsonProperty('spells', Number)
  spells: number;

  @JsonProperty('unspent', Number)
  unspent: number;

  constructor() {
    this.total = undefined;
    this.advantages = undefined;
    this.disadvantages = undefined;
    this.skills = undefined;
    this.spells = undefined;
    this.unspent = undefined;
  }
}
