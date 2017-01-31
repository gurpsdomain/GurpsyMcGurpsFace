import { Injectable } from '@angular/core';
import {Sheet} from '../../model/sheet/sheet';

@Injectable()
export class ReadModelCreaterService {

  constructor() { }

  public createReadModel(file: File): Promise<Sheet> {
    this.getFileContent(file).then(json => console.log('Read the following json: ', json));

    return Promise.resolve(new Sheet());
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
