import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Attributes {

  @JsonProperty('strength', Number)
  strength: number;

  @JsonProperty('dexterity', Number)
  dexterity: number;

  @JsonProperty('health', Number)
  health: number;

  @JsonProperty('intelligence', Number)
  intelligence: number;

  constructor() {
    this.strength = undefined;
    this.dexterity = undefined;
    this.health = undefined;
    this.intelligence = undefined;
  }
}
