import {BasicLift} from '../basic-lift.model';
import {Dodge} from '../dodge.model';
import {Move} from '../move.model';
import {MaxLoad} from '../max-load.model';
import {SheetTemplate} from '../../sheet-template/sheet-template.model';
import {DamageRol} from './damage-rol.enum';

export class SecondaryCharacteristics {

  sizeModifier: Number;
  will: number;
  perception: number;
  vision: number;
  hearing: number;
  tasteAndSmell: number;
  touch: number;
  basicLift: BasicLift;
  hitPoints: number;
  fatiguePoints: number;
  basicSpeed: number;
  basicMove: number;
  maxLoad: MaxLoad;
  move: Move;
  dodge: Dodge;
  damageSwinging: DamageRol;
  damageThrusting: DamageRol;
  frightCheck: number;

  constructor(template: SheetTemplate) {
    this.sizeModifier = template.size;
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
    this.damageSwinging = DamageRol.DIE;
    this.damageThrusting = DamageRol.DIE_MINUS_THREE;
    this.frightCheck = undefined;
  }
}
