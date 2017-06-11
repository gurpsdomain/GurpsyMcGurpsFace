import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Description {

  @JsonProperty('race', String)
  race: string;

  @JsonProperty('gender', String)
  gender: string;

  @JsonProperty('age', String)
  age: string;

  @JsonProperty('birthday', String)
  birthday: string;

  @JsonProperty('height', String)
  height: string;

  @JsonProperty('weight', String)
  weight: string;

  @JsonProperty('TL', String)
  TL: string;

  @JsonProperty('hair', String)
  hair: string;

  @JsonProperty('eyes', String)
  eyes: string;

  @JsonProperty('skin', String)
  skin: string;

  @JsonProperty('hand', String)
  hand: string;

  constructor() {
    this.race = undefined;
    this.gender = undefined;
    this.age = undefined;
    this.birthday = undefined;
    this.height = undefined;
    this.weight = undefined;
    this.TL = undefined;
    this.hair = undefined;
    this.eyes = undefined;
    this.skin = undefined;
    this.hand = undefined;
  }
}
