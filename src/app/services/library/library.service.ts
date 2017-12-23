import {Injectable} from '@angular/core';
import {AdvantagesLibrary} from '../../models/library/advantages/advantages.model';
import {HttpClient} from '@angular/common/http';
import {JsonConvert} from 'json2typescript';
import {GurpsyConstants} from '../../gurpsy.constants';

@Injectable()
export class LibraryService {

  constructor(private httpClient: HttpClient) {
  }

  public async getAdvantages(): Promise<AdvantagesLibrary> {

    try {
      const data = await this.httpClient.get(GurpsyConstants.LIBRARY_GURPS_LITE).toPromise();

      const jsonConvert = new JsonConvert();
      const advantages = jsonConvert.deserialize(data, AdvantagesLibrary);

      return Promise.resolve(advantages);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
