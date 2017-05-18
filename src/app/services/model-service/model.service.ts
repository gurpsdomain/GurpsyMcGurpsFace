import {Injectable} from '@angular/core';
import {JsonService} from '../json-service/json.service';
import {Subject} from 'rxjs';
import {StorageService} from '../storage-service/storage.service';
import {OutputSheet} from '../../models/sheet/output';
import {SheetImpl} from '../../models/sheet/output-impl';
import {Http, RequestOptions, Headers} from '@angular/http';
import {InputSheet} from '../../models/sheet/input';
import {SheetValidator} from '../../models/sheet/validators/sheet-validator';
import {SettingsService} from '../settings-service/settings.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ModelService {

  private static SHEET_MODEL_TRANSFORMER_ENDPOINT = 'convert';
  private static FALLBACK_MODEL = './assets/sheets/dai-blackthorn-output.json';

  private model: OutputSheet;
  private sheetValidator: SheetValidator;

  private configService: SettingsService;
  private jsonService: JsonService;
  private http: Http;
  private storageService: StorageService;
  private modelChangeSource = new Subject<OutputSheet>();

  public modelChange$ = this.modelChangeSource.asObservable();

  constructor(jsonService: JsonService, configService: SettingsService, storageService: StorageService, http: Http) {
    this.configService = configService;
    this.jsonService = jsonService;
    this.storageService = storageService;
    this.http = http;

    this.sheetValidator = new SheetValidator();

    this.initSheet();
  }

  /**
   * Load a sheet from file. A json file is expected and it should abide to the interface
   * as defined in ../../model/sheet/input.
   *
   * @param file
   */
  public loadSheetFromFile(file: File): Promise<InputSheet> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = readFile => {
          if (readFile) {
            const sheet: InputSheet = JSON.parse(fileReader.result);
            resolve(sheet);
          } else {
            reject('Could not read file');
          }
        };
        fileReader.readAsText(file);
      }
    );
  }

  /**
   * Load a sheet. This method should be used to load a new sheet into
   * this application. It will both load the new sheet and persist
   * in local storage.
   *
   * @param {InputSheet} sheet
   */
  public loadSheet(sheet: InputSheet): void {
    console.log('Loading sheet: ', sheet);

    this.configService.getServerUrl().then(url => this.sendConvertRequest(sheet, url).then(outputsheet => this.setSheet(outputsheet)));
  }

  /**
   * Return the current outputSheet.
   *
   * @returns {OutputSheet}
   */
  public getSheet(): OutputSheet {
    return this.model;
  }

  private handleStoredSheet(sheet: OutputSheet): void {
    if (this.sheetValidator.isValidOutputSheet(sheet)) {
      this.setSheet(sheet);
    } else {
      this.initEmptySheet();
    }
  }

  private setSheet(sheet: OutputSheet): void {
    this.model = sheet;
    this.modelChangeSource.next(sheet);
  }

  private initSheet(): void {
    this.initEmptySheet();
    this.storageService.getCurrentSheet().then(sheet => this.handleStoredSheet(sheet)).catch(any => this.initEmptySheet());
  }

  private initEmptySheet(): void {
    const emptySheet: OutputSheet = new SheetImpl();
    this.setSheet(emptySheet);
  }

  private sendConvertRequest(sheet: InputSheet, serverUrl: string): Promise<OutputSheet> {
    const endpoint = this.constructEndpointUrl(serverUrl);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions();
    options.headers = headers;

    return this.http.post(endpoint, sheet, options).toPromise().then(response => this.extractData(response)).catch(this.handleRequestError)
  }

  private extractData(res: any): Promise<OutputSheet> {
    return Promise.resolve(res.json());
  }

  private handleRequestError(error: any): Promise<OutputSheet> {
    console.log('Error on request, going for fallback', error);
    return Promise.reject(error.message || error);
    // return this.getFallbackSheet();
  }


  private getFallbackSheet(): Promise<OutputSheet> {
    return this.http.get(ModelService.FALLBACK_MODEL).toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.message || error))
  }

  private constructEndpointUrl(serverUrl: string): string {
    const separatorRequired = serverUrl.charAt(serverUrl.length - 1) !== '/';

    let endPoint = serverUrl;

    if (separatorRequired) {
      endPoint = endPoint.concat('/')
    }

    endPoint = endPoint.concat(ModelService.SHEET_MODEL_TRANSFORMER_ENDPOINT);

    return endPoint;
  }
}
