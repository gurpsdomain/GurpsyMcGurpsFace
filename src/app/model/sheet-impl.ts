import {
  PlayerInformation,
  Sheets,
  Identity,
  Description,
  MetaData,
  Points,
  Attributes,
  BasicLift,
  SecondaryCharacteristics,
  DamageResistances,
  Modifier,
  Advantage,
  Disadvantage,
  Skill,
  Spell,
  Equipment,
  Note,
  Sheet
} from './sheet';

export class PlayerInformationImpl implements PlayerInformation {
  player: string = '';
  campaign: string = '';
  createdOn: string = '';
}

export class IdentityImpl implements Identity {
  name: string = '';
  title: string = '';
  religion: string = '';
}

export class DescriptionImpl implements Description {
  race: string = '';
  gender: string = '';
  age: string = '';
  birthday: string = '';
  height: string = '';
  weight: string = '';
  TL: string = '';
  hair: string = '';
  eyes: string = '';
  skin: string = '';
  hand: string = '';
}

export class MetaDataImpl implements MetaData {
  playerInformation: PlayerInformation = new PlayerInformationImpl();
  identity: Identity = new IdentityImpl();
  description: Description = new DescriptionImpl();
}

export class PointsImpl implements Points {
  total: number = 0;
  advantages: number = 0;
  disadvantages: number = 0;
  skills: number = 0;
  spells: number = 0;
  unspent: number = 0;
}

export class AttributesImpl implements Attributes {
  strength: number = 0;
  dexterity: number = 0;
  health: number = 0;
  intelligence: number = 0;
}

export class BasicLiftImpl implements BasicLift {
  imperial: string = '';
  realMetric: string = '';
  gameMetric: string = '';
}

export class SecondaryCharacteristicsImpl implements SecondaryCharacteristics {
  sizeModifier: number = 0;
  will: number = 0;
  perception: number = 0;
  vision: number = 0;
  hearing: number = 0;
  tasteAndSmell: number = 0;
  touch: number = 0;
  basicLift: BasicLift = new BasicLiftImpl();
  hitPoints: number = 0;
  fatiguePoints: number = 0;
  basicSpeed: number = 0;
  basicMove: number = 0;
  damageSwinging: string = '';
  damageThrusting: string = '';
  frightCheck: number = 0;
}

export class DamageResistancesImpl implements DamageResistances {
  eye: number = 0;
  skull: number = 0;
  face: number = 0;
  rightLeg: number = 0;
  rightArm: number = 0;
  torso: number = 0;
  groin: number = 0;
  leftArm: number = 0;
  leftLeg: number = 0;
  hand: number = 0;
  foot: number = 0;
  neck: number = 0;
  vitals: number = 0;
}

export class ModifierImpl implements Modifier {
  name: string = '';
  pageReference: string = '';
  note: string = '';
}

export class AdvantageImpl implements Advantage {
  name: string = '';
  points: number = 0;
  pageReference: string = '';
  modifiers: Modifier[] = [];
  level?: number = 0;
}

export class DisadvantageImpl implements Disadvantage {
  name: string = '';
  points: number = 0;
  pageReference: string = '';
  modifiers: any[] = [];
}

export class SkillImpl implements Skill {
  name: string = '';
  points: number = 0;
  level: number = 0;
  pageReference: string = '';
  controllingAttribute: string = '';
  difficultyLevel: string = '';
}

export class SpellImpl implements Spell {
  name: string = '';
  points: number = 0;
  level: number = 0;
  difficultyLevel: string = '';
  castingTime: string = '';
  colleges: string = '';
  powerSource: string = '';
  duration: string = '';
  maintenanceCost: string = '';
  spellClasses: string = '';
  pageReference: string = '';
}

export class EquipmentImpl implements Equipment {
  name: string = '';
}

export class NoteImpl implements Note {
  name: string = '';
  note: string = '';
}

export class SheetImpl implements Sheet {
  metaData: MetaData = new MetaDataImpl();
  points: Points = new PointsImpl();
  attributes: Attributes = new AttributesImpl();
  secondaryCharacteristics: SecondaryCharacteristics = new SecondaryCharacteristicsImpl();
  damageResistances: DamageResistances = new DamageResistancesImpl();
  advantages: Advantage[] = [];
  disadvantages: Disadvantage[] = [];
  skills: Skill[] = [];
  spells: Spell[] = [];
  equipments: Equipment[] = [];
  notes: Note[] = [];
}

export class SheetsImpl implements Sheets {
  current: Sheet;
  previous: Sheet[] = [];
}



