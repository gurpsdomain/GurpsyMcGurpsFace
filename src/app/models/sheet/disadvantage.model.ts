import {Modifier} from './modifier.model';

export class Disadvantage {

  name: string;
  points: number;
  pageReference: string;
  modifiers: Modifier[];

  constructor() {
    this.name = undefined;
    this.points = undefined;
    this.pageReference = undefined;
    this.modifiers = []
  }
}
