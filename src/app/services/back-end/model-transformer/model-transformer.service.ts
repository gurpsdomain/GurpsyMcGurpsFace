import {Injectable} from '@angular/core';
import {SettingsService} from '../../front-end/settings/settings.service';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {InputSheet} from '../../../models/sheet/input';
import {OutputSheet} from '../../../models/sheet/output';

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
   * Transform an InputSheet into an OutputSheet
   *
   * @param  InputSheet
   * @return OutputSheet
   */
  public transform(inputSheet: InputSheet): Promise<OutputSheet> {
    return this.settingsService.getServerUrl()
      .then(url => this.sendConvertRequest(inputSheet, url));
  }

  private sendConvertRequest(sheet: InputSheet, serverUrl: string): Promise<OutputSheet> {
    const endpoint = this.constructEndpointUrl(serverUrl);

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions();
    options.headers = headers;

    return this.http.post(endpoint, sheet, options).toPromise()
      .then(response => this.extractData(response))
      .catch(this.handleRequestError)
  }

  private extractData(res: any): Promise<OutputSheet> {
    return Promise.resolve(res.json());
  }

  private handleRequestError(error: any): Promise<OutputSheet> {
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