import {Injectable} from '@angular/core';
import {Sheet, Sheets} from '../../models/sheet/sheet';
import {Config} from '../../models/config/config';

@Injectable()
export class JsonService {

  /**
   * Parse a json string into a typed Config object.
   *
   * @param json
   * @returns config: Config
   */
  public parseJsonConfig(json: string): Config {
    return JSON.parse(json);
  }

  /**
   * Parse a json string into a typed Sheet object.
   *
   * @param json
   * @returns sheet: Sheet
   */
  public parseJsonSheet(json: string): Sheet {
    return JSON.parse(json);
  }

  /**
   * Parse a json string into a typed Sheets object.
   *
   * @param json
   * @returns sheets: Sheets
   */
  public parseJsonSheets(json: string): Sheets {
    return JSON.parse(json);
  }

  /**
   * Parse the given File to a typed Sheet object.
   *
   * @param file: File
   *
   * @returns Promise<Sheet>  A Promise that resolves to the Sheet
   */
  public parseFile(file: File): Promise<Sheet> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            const sheet: Sheet = this.parseJsonSheet(fileReader.result);
            resolve(sheet);
          } else {
            reject();
          }
        };
        fileReader.readAsText(file);
      }
    );
  }
}
