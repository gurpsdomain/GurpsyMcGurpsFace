import {Injectable} from '@angular/core';
import {JsonService} from '../../back-end/json/json.service';
import {Subject} from 'rxjs';
import {StorageService} from '../../back-end/storage/storage.service';
import {OutputSheet} from '../../../models/sheet/output';
import {SheetImpl} from '../../../models/sheet/output-impl';
import {Http} from '@angular/http';
import {InputSheet} from '../../../models/sheet/input';
import {SheetValidator} from '../../../models/sheet/validators/sheet-validator';
import {SettingsService} from '../settings/settings.service';
import 'rxjs/add/operator/toPromise';
import {ModelTransformerService} from '../../back-end/model-transformer/model-transformer.service';
import {LoggingService} from '../../back-end/logging/logging.service';

@Injectable()
export class ModelService {


  private static FALLBACK_MODEL = './assets/sheets/dai-blackthorn-output.json';

  private outputModel: OutputSheet;
  private sheetValidator: SheetValidator;

  private modelTransformerService: ModelTransformerService;
  private loggingService: LoggingService;
  private http: Http;
  private storageService: StorageService;
  private modelChangeSource = new Subject<OutputSheet>();

  public modelChange$ = this.modelChangeSource.asObservable();

  constructor(loggingService: LoggingService,
              modelTransformerService: ModelTransformerService,
              storageService: StorageService,
              http: Http) {
    this.loggingService = loggingService;
    this.modelTransformerService = modelTransformerService;
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
    this.modelTransformerService.transform(sheet)
      .then(outputSheet => this.setOutputModel(outputSheet)).catch(any => this.setFallbackOutputModel())
  }

  /**
   * Return the current outputSheet.
   *
   * @returns {OutputSheet}
   */
  public getSheet(): OutputSheet {
    return this.outputModel;
  }

  private handleStoredSheet(sheet: OutputSheet): void {
    if (this.sheetValidator.isValidOutputSheet(sheet)) {
      this.setOutputModel(sheet);
    } else {
      this.initEmptySheet();
    }
  }

  private setOutputModel(outputSheet: OutputSheet): void {
    this.outputModel = outputSheet;
    this.modelChangeSource.next(outputSheet);
  }

  private initSheet(): void {
    this.initEmptySheet();
    this.storageService.getCurrentSheet().then(sheet => this.handleStoredSheet(sheet)).catch(any => this.initEmptySheet());
  }

  private initEmptySheet(): void {
    const emptySheet: OutputSheet = new SheetImpl();
    this.setOutputModel(emptySheet);
  }

  private setFallbackOutputModel(): void {
    this.http.get(ModelService.FALLBACK_MODEL).toPromise()
      .then(response => this.setOutputModel(response.json()))
      .catch(error => this.loggingService.error('Unable to fetch fallback sheet. ' + error))
  }
}
