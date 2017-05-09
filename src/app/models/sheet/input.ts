export interface Modifier {
  name: string;
  variation: string;
}

export interface Advantage {
  name: string;
  modifiers: Modifier[];
  levels?: number;
}

export interface Disadvantage {
  name: string;
}

export interface Skill {
  name: string;
  points: number;
}

export interface Spell {
  name: string;
  points: number;
}

export interface Equipment {
  name: string;
}

export interface Note {
  name: string;
  note: string;
}

export interface InputSheet {
  player: string;
  campaign: string;
  createdOn: string;
  name: string;
  title: string;
  religion: string;
  race: string;
  gender: string;
  age: number;
  birthday: string;
  height: string;
  weight: string;
  size: string;
  TL: number;
  hair: string;
  eyes: string;
  skin: string;
  hand: string;
  basepoints: number;
  rewards: number[];
  advantages: Advantage[];
  disadvantages: Disadvantage[];
  skills: Skill[];
  spells: Spell[];
  equipments: Equipment[];
  notes: Note[];
}



