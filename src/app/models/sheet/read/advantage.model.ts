import {Modifier} from './modifier.model';

export class Advantage {

  name: string;
  points: number;
  pageReference: string;
  modifiers: Modifier[];
  level: number;

  constructor() {
    this.name = undefined;
    this.points = undefined;
    this.pageReference = undefined;
    this.modifiers = []
    this.level = undefined;
  }
}
