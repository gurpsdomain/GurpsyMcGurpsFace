import {Injectable} from '@angular/core';
import {Sheet} from '../../model/sheet';

@Injectable()
export class JsonService {

  constructor() {
  }

  public loadFile(file: File): Promise<Sheet> {
    return this.parseFile(file);
  }

  public convertToSheet(jsonString: string): Sheet {
    let jsonSheet: Sheet = this.convertToTypedObject(jsonString);

    return jsonSheet;
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

  private convertToTypedObject(jsonString: string): Sheet {
    let typedJsonSheet: Sheet = JSON.parse(jsonString);
    return typedJsonSheet;
  }
}
