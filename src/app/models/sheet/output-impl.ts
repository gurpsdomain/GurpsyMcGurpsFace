import {
  PlayerInformation,
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
  OutputSheet,
  Note
} from './output';

export class PlayerInformationImpl implements PlayerInformation {
  player: string;
  campaign: string;
  createdOn: string;
}

export class IdentityImpl implements Identity {
  name: string;
  title: string;
  religion: string;
}

export class DescriptionImpl implements Description {
  race: string;
  gender: string;
  age: string;
  birthday: string;
  height: string;
  weight: string;
  TL: string;
  hair: string;
  eyes: string;
  skin: string;
  hand: string;
}

export class MetaDataImpl implements MetaData {
  playerInformation: PlayerInformation = new PlayerInformationImpl();
  identity: Identity = new IdentityImpl();
  description: Description = new DescriptionImpl();
}

export class PointsImpl implements Points {
  total: number;
  advantages: number;
  disadvantages: number;
  skills: number;
  spells: number;
  unspent: number;
}

export class AttributesImpl implements Attributes {
  strength: number;
  dexterity: number;
  health: number;
  intelligence: number;
}

export class BasicLiftImpl implements BasicLift {
  imperial: string;
  realMetric: string;
  gameMetric: string;
}

export class SecondaryCharacteristicsImpl implements SecondaryCharacteristics {
  sizeModifier: number;
  will: number;
  perception: number;
  vision: number;
  hearing: number;
  tasteAndSmell: number;
  touch: number;
  basicLift: BasicLift = new BasicLiftImpl();
  hitPoints: number;
  fatiguePoints: number;
  basicSpeed: number;
  basicMove: number;
  damageSwinging: string;
  damageThrusting: string;
  frightCheck: number;
}

export class DamageResistancesImpl implements DamageResistances {
  eye: number;
  skull: number;
  face: number;
  rightLeg: number;
  rightArm: number;
  torso: number;
  groin: number;
  leftArm: number;
  leftLeg: number;
  hand: number;
  foot: number;
  neck: number;
  vitals: number;
}

export class OutputSheetImpl implements OutputSheet {
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

export interface OutputSheets {
  current: OutputSheet;
  previous: OutputSheet[];
}


