export interface PlayerInformation {
  player: string;
  campaign: string;
  createdOn: string;
}

export interface Identity {
  name: string;
  title: string;
  religion: string;
}

export interface Description {
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

export interface MetaData {
  playerInformation: PlayerInformation;
  identity: Identity;
  description: Description;
}

export interface Points {
  total: number;
  advantages: number;
  disadvantages: number;
  skills: number;
  spells: number;
  unspent: number;
}

export interface Attributes {
  strength: number;
  dexterity: number;
  health: number;
  intelligence: number;
}

export interface BasicLift {
  imperial: string;
  realMetric: string;
  gameMetric: string;
}

export interface SecondaryCharacteristics {
  sizeModifier: number;
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
  damageSwinging: string;
  damageThrusting: string;
  frightCheck: number;
}

export interface DamageResistances {
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

export interface Modifier {
  name: string;
  pageReference: string;
  note: string;
}

export interface Advantage {
  name: string;
  points: number;
  pageReference: string;
  modifiers: Modifier[];
  level?: number;
}

export interface Disadvantage {
  name: string;
  points: number;
  pageReference: string;
  modifiers: any[];
}

export interface Skill {
  name: string;
  points: number;
  level: number;
  pageReference: string;
  controllingAttribute: string;
  difficultyLevel: string;
}

export interface Spell {
  name: string;
  points: number;
  level: number;
  difficultyLevel: string;
  castingTime: string;
  colleges: string;
  powerSource: string;
  duration: string;
  maintenanceCost: string;
  spellClasses: string;
  pageReference: string;
}

export interface Equipment {
  name: string;
}

export interface Note {
  name: string;
  note: string;
}

export interface JsonSheet {
  metaData: MetaData;
  points: Points;
  attributes: Attributes;
  secondaryCharacteristics: SecondaryCharacteristics;
  damageResistances: DamageResistances;
  advantages: Advantage[];
  disadvantages: Disadvantage[];
  skills: Skill[];
  spells: Spell[];
  equipments: Equipment[];
  notes: Note[];
}


