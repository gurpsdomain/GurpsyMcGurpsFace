import {Injectable} from '@angular/core';
import {Sheet} from '../../model/sheet/sheet';
import {Identity} from '../../model/sheet/identity';
import {PlayerInformation} from '../../model/sheet/player-information';
import {Points} from '../../model/sheet/points';

@Injectable()
export class ModelReadService {

  private model: Sheet;

  constructor() {
    this.model = new Sheet();
    this.model.description = 'Description of the character';
    this.model.identity = new Identity();
    this.model.identity.name = 'Dai Blackthorn';
    this.model.identity.religion = 'Atheist';
    this.model.identity.title = 'Captain';
    this.model.playerInformation = new PlayerInformation();
    this.model.playerInformation.campaign = 'Masters of Mayhem';
    this.model.playerInformation.creationDate = '01-01-2017';
    this.model.playerInformation.player = 'Steve Jackson';
    this.model.points = new Points();
    this.model.points.advantages = 1;
    this.model.points.attributes = 2;
    this.model.points.disadvantages = 3;
    this.model.points.earned = 5;
    this.model.points.quirks = 8;
    this.model.points.race = 13;
    this.model.points.spells = 21;
    this.model.points.skills = 34;
  }

  public getSheet(): Sheet {
    return this.model;
  }

}
