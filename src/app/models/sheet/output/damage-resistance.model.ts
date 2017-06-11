import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class DamageResistance {

  @JsonProperty('eye', Number)
  eye: string;

  @JsonProperty('skull', Number)
  skull: string;

  @JsonProperty('face', Number)
  face: string;

  @JsonProperty('rightLeg', Number)
  rightLeg: string;

  @JsonProperty('rightArm', Number)
  rightArm: string;

  @JsonProperty('torso', Number)
  torso: string;

  @JsonProperty('groin', Number)
  groin: string;

  @JsonProperty('leftArm', Number)
  leftArm: string;

  @JsonProperty('leftLeg', Number)
  leftLeg: string;

  @JsonProperty('hand', Number)
  hand: string;

  @JsonProperty('foot', Number)
  foot: string;

  @JsonProperty('neck', Number)
  neck: string;

  @JsonProperty('vitals', Number)
  vitals: string;

  constructor() {
    this.eye = undefined;
    this.skull = undefined;
    this.face = undefined;
    this.rightLeg = undefined;
    this.rightArm = undefined;
    this.torso = undefined;
    this.groin = undefined;
    this.leftArm = undefined;
    this.leftLeg = undefined;
    this.hand = undefined;
    this.foot = undefined;
    this.neck = undefined;
    this.vitals = undefined;
  }
}
