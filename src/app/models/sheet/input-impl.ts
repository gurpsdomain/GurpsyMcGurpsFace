import {InputSheets, InputSheet, Advantage, Disadvantage, Skill, Spell, Equipment, Note} from './input';

export class InputSheeImpl implements InputSheet {
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
  rewards: number[] = [];
  advantages: Advantage[] = [];
  disadvantages: Disadvantage[] = [];
  skills: Skill[] = [];
  spells: Spell[] = [];
  equipments: Equipment[] = [];
  notes: Note[] = [];
}

export class InputSheetsImpl implements InputSheets {
  current: InputSheet;
  previous: InputSheet[] = [];
}
