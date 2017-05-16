import {Injectable} from '@angular/core';
import {JsonService} from '../json-service/json.service';
import {Subject} from 'rxjs';
import {StorageService} from '../storage-service/storage.service';
import {OutputSheet, Points, Description, Identity, PlayerInformation} from '../../models/sheet/output';
import {SheetImpl} from '../../models/sheet/output-impl';
import {Http} from '@angular/http';
import {InputSheet} from '../../models/sheet/input';

@Injectable()
export class ModelService {

  private static SHEET_MODEL_TRANSFORMER_ENDPOINT = '';
  private static FALLBACK_MODEL = './assets/sheets/dai-blackthorn-output.json';

  private model: OutputSheet;
  private jsonService: JsonService;
  private http: Http;
  private storageService: StorageService;
  private modelChangeSource = new Subject<OutputSheet>();

  public modelChange$ = this.modelChangeSource.asObservable();

  constructor(jsonService: JsonService, storageService: StorageService, http: Http) {
    this.jsonService = jsonService;
    this.storageService = storageService;
    this.http = http;

    this.initSheet();
  }

  /**
   * Load a sheet from file. A json file
   * is expected and it should abide to the interface as defined in ../../model/sheet/input.
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
            reject();
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


  }

  /**
   * Return the current outputSheet.
   *
   * @returns {OutputSheet}
   */
  public getSheet(): OutputSheet {
    return this.model;
  }

  private isValidReadModel(sheet: OutputSheet): boolean {
    let validReadModel = true;

    try {
      const description: Description = sheet.metaData.description;
      const identity: Identity = sheet.metaData.identity;
      const playerInformation: PlayerInformation = sheet.metaData.playerInformation;
      const points: Points = sheet.points;

      if (!description || !identity || !playerInformation || !points) {
        validReadModel = false;
      }

    } catch (ex) {
      validReadModel = false;
    }
    return validReadModel;
  }

  private handleStoredSheet(sheet: OutputSheet): void {
    if (this.isValidReadModel(sheet)) {
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

  private getFallbackSheet(): Promise<OutputSheet> {
    return this.http.get(ModelService.FALLBACK_MODEL).toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.message || error))

  }
}
