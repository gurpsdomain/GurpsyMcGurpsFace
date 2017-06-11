import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Attributes {

  @JsonProperty('strength', Number)
  strength: string;

  @JsonProperty('dexterity', Number)
  dexterity: string;

  @JsonProperty('health', Number)
  health: string;

  @JsonProperty('intelligence', Number)
  intelligence: string;

  constructor() {
    this.strength = undefined;
    this.dexterity = undefined;
    this.health = undefined;
    this.intelligence = undefined;
  }
}
