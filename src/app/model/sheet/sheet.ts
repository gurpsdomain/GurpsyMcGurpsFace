export class Sheet {
  description: string;
  identity: Identity;
  playerInformation: PlayerInformation;
  points: Points;

  constructor() {
  }
}

export class Identity {
  name: string;
  title: string;
  religion: string;

  constructor() {
  }
}

export class PlayerInformation {
  player: string;
  campaign: string;
  creationDate: string;

  constructor() {
  }
}

export class Points {
  race: number;
  attributes: number;
  advantages: number;
  disadvantages: number;
  quirks: number;
  skills: number;
  spells: number;
  earned: number;
  total: number;

  constructor() {
  }
}
