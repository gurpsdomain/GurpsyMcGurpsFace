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

    this.model = new Sheet();
    this.model.identity = new Identity();
    this.model.playerInformation = new PlayerInformation();
    this.model.points = new Points();
  }

  public loadSheet(file: File) {
    this.readModelCreaterService.createReadModel(file).then(
      sheet => console.log('Just created the following sheet: ', sheet
      ));
  }

  public getSheet(): Sheet {
    return this.model;
  }
}
