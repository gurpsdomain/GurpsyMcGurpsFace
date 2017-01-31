import {Injectable} from '@angular/core';
import {Sheet} from '../../model/sheet/sheet';
import {Identity} from '../../model/sheet/identity';
import {PlayerInformation} from '../../model/sheet/player-information';
import {Points} from '../../model/sheet/points';
import {ReadModelCreaterService} from '../read-model-creator-service/read-model-creator.service';

@Injectable()
export class ModelReadService {

  private model: Sheet;
  private readModelCreaterService: ReadModelCreaterService;

  constructor(readModelCreaterService: ReadModelCreaterService) {
    this.readModelCreaterService = readModelCreaterService;

    this.initSheet();
  }

  public loadSheet(file: File) {
    this.readModelCreaterService.createReadModel(file).then(
      sheet => this.model = sheet);
  }

  public getSheet(): Sheet {
    return this.model;
  }

  private initSheet(): void {
    this.initEmptySheet();
  }

  private initEmptySheet(): void {
    this.model = new Sheet();
    this.model.identity = new Identity();
    this.model.playerInformation = new PlayerInformation();
    this.model.points = new Points();
  }
}
