import {Injectable} from '@angular/core';
import {SettingsService} from '../../front-end/settings/settings.service';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {UpdateSheet} from '../../../models/sheet/update/update-sheet.model';
import {JsonConvert} from 'json2typescript';
import {ReadSheet} from '../../../models/sheet/read/read-sheet.model';

@Injectable()
export class ModelTransformerService {

  private static SHEET_MODEL_TRANSFORMER_ENDPOINT = 'convert';

  private settingsService: SettingsService;
  private http: Http;

  constructor(http: Http, settingsService: SettingsService) {
    this.settingsService = settingsService;
    this.http = http;
  }

  /**
   * Transform an UpdateSheet into an ReadSheet
   *
   * @param  UpdateSheet
   * @return ReadSheet
   */
  public transform(inputSheet: UpdateSheet): Promise<ReadSheet> {
    return this.settingsService.getServerUrl()
      .then(url => this.sendConvertRequest(inputSheet, url));
  }

  private sendConvertRequest(sheet: UpdateSheet, serverUrl: string): Promise<ReadSheet> {
    const endpoint = this.constructEndpointUrl(serverUrl);

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions();
    options.headers = headers;

    return this.http.post(endpoint, sheet, options).toPromise()
      .then(response => this.extractData(response))
      .catch(this.handleRequestError)
  }

  private extractData(res: any): Promise<ReadSheet> {
    const outputSheet = JsonConvert.deserializeString(res.json(), ReadSheet)
    return Promise.resolve(outputSheet);
  }

  private handleRequestError(error: any): Promise<ReadSheet> {
    return Promise.reject(error.message || error);
  }

  private constructEndpointUrl(serverUrl: string): string {
    const separatorRequired = serverUrl.charAt(serverUrl.length - 1) !== '/';

    let endPoint = serverUrl;

    if (separatorRequired) {
      endPoint = endPoint.concat('/')
    }

    endPoint = endPoint.concat(ModelTransformerService.SHEET_MODEL_TRANSFORMER_ENDPOINT);

    return endPoint;
  }
}
