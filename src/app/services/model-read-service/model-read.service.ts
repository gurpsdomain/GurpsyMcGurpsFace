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
    this.model.identity = new Identity();
    this.model.playerInformation = new PlayerInformation();
    this.model.points = new Points();
  }

  public loadSheet(file: File) {
    this.getFileContent(file).then(json => console.log('Read the following json: ', json));
  }

  public getSheet(): Sheet {
    return this.model;
  }

  private getFileContent(file: File): Promise<string> {

    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = readFile => {
        if (readFile) {
          resolve(fileReader.result);
        } else {
          reject();
        }
      };
      fileReader.readAsText(file);
    });
  }

}
