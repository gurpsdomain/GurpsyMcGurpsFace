import {JsonObject, JsonProperty} from 'json2typescript';
import {BasicLift} from './basic-lift.model';
import {Dodge} from './dodge.model';
import {Move} from './move.model';
import {MaxLoad} from './max-load.model';

@JsonObject
export class SecondaryCharacteristics {

  @JsonProperty('sizeModifier', Number)
  sizeModifier: Number;

  @JsonProperty('will', Number)
  will: number;

  @JsonProperty('perception', Number)
  perception: number;

  @JsonProperty('vision', Number)
  vision: number;

  @JsonProperty('hearing', Number)
  hearing: number;

  @JsonProperty('tasteAndSmell', Number)
  tasteAndSmell: number;

  @JsonProperty('touch', Number)
  touch: number;

  @JsonProperty('basicLift', BasicLift)
  basicLift: BasicLift;

  @JsonProperty('hitPoints', Number)
  hitPoints: number;

  @JsonProperty('fatiguePoints', Number)
  fatiguePoints: number;

  @JsonProperty('basicSpeed', Number)
  basicSpeed: number;

  @JsonProperty('basicMove', Number)
  basicMove: number;

  @JsonProperty('maxLoad', MaxLoad)
  maxLoad: MaxLoad;

  @JsonProperty('move', Move)
  move: Move;

  @JsonProperty('dodge', Dodge)
  dodge: Dodge;

  @JsonProperty('damageSwinging', Number)
  damageSwinging: number;

  @JsonProperty('damageThrusting', Number)
  damageThrusting: number;

  @JsonProperty('frightCheck', Number)
  frightCheck: number;

  constructor() {
    this.sizeModifier = undefined;
    this.will = undefined;
    this.perception = undefined;
    this.vision = undefined;
    this.hearing = undefined;
    this.tasteAndSmell = undefined;
    this.touch = undefined;
    this.basicLift = new BasicLift();
    this.hitPoints = undefined;
    this.fatiguePoints = undefined;
    this.basicSpeed = undefined;
    this.basicMove = undefined;
    this.maxLoad = new MaxLoad();
    this.move = new Move();
    this.dodge = new Dodge();
    this.damageSwinging = undefined;
    this.damageThrusting = undefined;
    this.frightCheck = undefined;
  }
}
