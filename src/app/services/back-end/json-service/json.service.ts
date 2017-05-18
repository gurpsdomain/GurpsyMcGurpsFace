import {Injectable} from '@angular/core';
import {OutputSheet, OutputSheets} from '../../../models/sheet/output';
import {Config} from '../../../models/config/config';

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
   * Parse a json string into a typed OutputSheet object.
   *
   * @param json
   * @returns sheet: OutputSheet
   */
  public parseJsonSheet(json: string): OutputSheet {
    return JSON.parse(json);
  }

  /**
   * Parse a json string into a typed Sheets object.
   *
   * @param json
   * @returns sheets: Sheets
   */
  public parseJsonSheets(json: string): OutputSheets {
    return JSON.parse(json);
  }

  /**
   * Parse the given File to a typed OutputSheet object.
   *
   * @param file: File
   *
   * @returns Promise<OutputSheet>  A Promise that resolves to the OutputSheet
   */
  public parseFile(file: File): Promise<OutputSheet> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            const sheet: OutputSheet = this.parseJsonSheet(fileReader.result);
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
