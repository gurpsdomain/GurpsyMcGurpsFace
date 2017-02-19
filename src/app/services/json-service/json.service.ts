import {Injectable} from '@angular/core';
import {JsonSheet} from '../../model/json/sheet';

@Injectable()
export class JsonService {

  constructor() {
  }

  public loadFile(file: File): Promise<JsonSheet> {
    return this.parseFile(file);
  }

  public convertToSheet(jsonString: string): JsonSheet {
    let jsonSheet: JsonSheet = this.convertToTypedObject(jsonString);

    return jsonSheet;
  }

  private parseFile(file: File): Promise<JsonSheet> {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            let sheet: JsonSheet = this.convertToSheet(fileReader.result);
            resolve(sheet);
          } else {
            reject();
          }
        };
        fileReader.readAsText(file);
      }
    );
  }

  private convertToTypedObject(jsonString: string): JsonSheet {
    let typedJsonSheet: JsonSheet = JSON.parse(jsonString);
    return typedJsonSheet;
  }
}
