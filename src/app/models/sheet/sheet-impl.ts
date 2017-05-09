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
  player = '';
  campaign = '';
  createdOn = '';
}

export class IdentityImpl implements Identity {
  name = '';
  title = '';
  religion = '';
}

export class DescriptionImpl implements Description {
  race = '';
  gender = '';
  age = '';
  birthday = '';
  height = '';
  weight = '';
  TL = '';
  hair = '';
  eyes = '';
  skin = '';
  hand = '';
}

export class MetaDataImpl implements MetaData {
  playerInformation: PlayerInformation = new PlayerInformationImpl();
  identity: Identity = new IdentityImpl();
  description: Description = new DescriptionImpl();
}

export class PointsImpl implements Points {
  total = 0;
  advantages = 0;
  disadvantages = 0;
  skills = 0;
  spells = 0;
  unspent = 0;
}

export class AttributesImpl implements Attributes {
  strength = 0;
  dexterity = 0;
  health = 0;
  intelligence = 0;
}

export class BasicLiftImpl implements BasicLift {
  imperial = '';
  realMetric = '';
  gameMetric = '';
}

export class SecondaryCharacteristicsImpl implements SecondaryCharacteristics {
  sizeModifier = 0;
  will = 0;
  perception = 0;
  vision = 0;
  hearing = 0;
  tasteAndSmell = 0;
  touch = 0;
  basicLift: BasicLift = new BasicLiftImpl();
  hitPoints = 0;
  fatiguePoints = 0;
  basicSpeed = 0;
  basicMove = 0;
  damageSwinging = '';
  damageThrusting = '';
  frightCheck = 0;
}

export class DamageResistancesImpl implements DamageResistances {
  eye = 0;
  skull = 0;
  face = 0;
  rightLeg = 0;
  rightArm = 0;
  torso = 0;
  groin = 0;
  leftArm = 0;
  leftLeg = 0;
  hand = 0;
  foot = 0;
  neck = 0;
  vitals = 0;
}

export class ModifierImpl implements Modifier {
  name = '';
  pageReference = '';
  note = '';
}

export class AdvantageImpl implements Advantage {
  name = '';
  points = 0;
  pageReference = '';
  modifiers: Modifier[] = [];
  level? = 0;
}

export class DisadvantageImpl implements Disadvantage {
  name = '';
  points = 0;
  pageReference = '';
  modifiers: any[] = [];
}

export class SkillImpl implements Skill {
  name = '';
  points = 0;
  level = 0;
  pageReference = '';
  controllingAttribute = '';
  difficultyLevel = '';
}

export class SpellImpl implements Spell {
  name = '';
  points = 0;
  level = 0;
  difficultyLevel = '';
  castingTime = '';
  colleges = '';
  powerSource = '';
  duration = '';
  maintenanceCost = '';
  spellClasses = '';
  pageReference = '';
}

export class EquipmentImpl implements Equipment {
  name = '';
  pageReference = '';
}

export class NoteImpl implements Note {
  name = '';
  note = '';
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



