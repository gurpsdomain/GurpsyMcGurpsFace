import {Injectable} from '@angular/core';
import {TypedJsonSheet} from '../../model/json/sheet';
import {Sheet} from '../../model/sheet/sheet';
import {Identity} from '../../model/sheet/identity';
import {PlayerInformation} from '../../model/sheet/player-information';
import {Points} from '../../model/sheet/points';

@Injectable()
export class JsonService {

  constructor() {
  }

  public createReadModelFromFile(file: File): Promise<Sheet> {
    return this.parseFile(file);
  }

  public convertToSheet(jsonString: string): Sheet {
    let jsonSheet: TypedJsonSheet = this.convertToTypedObject(jsonString);

    let sheet: Sheet = this.mapTypedObjectToSheet(jsonSheet);
    return sheet;
  }

  private parseFile(file: File): Promise<Sheet> {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            let sheet: Sheet = this.convertToSheet(fileReader.result);
            resolve(sheet);
          } else {
            reject();
          }
        };
        fileReader.readAsText(file);
      }
    );
  }

  private convertToTypedObject(jsonString: string): TypedJsonSheet {
    let typedJsonSheet: TypedJsonSheet = JSON.parse(jsonString);
    return typedJsonSheet;
  }

  private mapTypedObjectToSheet(jsonSheet: TypedJsonSheet): Sheet {
    let sheet: Sheet = new Sheet();
    sheet.identity = new Identity();
    sheet.identity.name = jsonSheet.metaData.identity.name;
    sheet.identity.religion = jsonSheet.metaData.identity.religion;
    sheet.identity.title = jsonSheet.metaData.identity.title;
    sheet.playerInformation = new PlayerInformation();
    sheet.playerInformation.campaign = jsonSheet.metaData.playerInformation.campaign;
    sheet.playerInformation.creationDate = jsonSheet.metaData.playerInformation.createdOn;
    sheet.playerInformation.player = jsonSheet.metaData.playerInformation.player;
    sheet.points = new Points();
    sheet.points.earned = jsonSheet.points.unspent;
    sheet.points.advantages = jsonSheet.points.advantages;
    sheet.points.disadvantages = jsonSheet.points.disadvantages;
    sheet.points.skills = jsonSheet.points.skills;
    sheet.points.spells = jsonSheet.points.spells;
    sheet.points.total = jsonSheet.points.total;
    sheet.description = jsonSheet.metaData.description.age;

    return sheet;
  }
}
