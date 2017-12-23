import {Injectable} from '@angular/core';
import {Advantages} from '../../models/library/advantages/advantages.model';
import {HttpClient} from '@angular/common/http';
import {JsonConvert} from 'json2typescript';

@Injectable()
export class LibraryService {

  constructor(private httpClient: HttpClient) {
  }

  public async getAdvantages(): Promise<Advantages> {

    try {
      const data = await this.httpClient.get('assets/library/lite/advantages.json').toPromise();

      const jsonConvert = new JsonConvert();
      const advantages = jsonConvert.deserialize(data, Advantages);

      return Promise.resolve(advantages);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
