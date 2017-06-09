import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../back-end/storage/storage.service';
import {OutputSheet} from '../../../models/sheet/output';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ModelTransformerService} from '../../back-end/model-transformer/model-transformer.service';
import {LoggingService} from '../../back-end/logging/logging.service';
import {OutputSheetImpl} from '../../../models/sheet/output-impl';
import {InputSheet} from '../../../models/sheet/input/input.sheet.model';
import {JsonConvert} from 'json2typescript';

@Injectable()
export class ModelService {

  private static FALLBACK_MODEL = './assets/sheets/dai-blackthorn-output.json';

  private inputModel: InputSheet;
  private outputModel: OutputSheet = new OutputSheetImpl();

  private http: Http;

  private loggingService: LoggingService;
  private modelTransformerService: ModelTransformerService;
  private storageService: StorageService;

  private outputModelChangeSource = new Subject<OutputSheet>();
  private inputModelChangeSource = new Subject<InputSheet>();

  public outputModelChange$ = this.outputModelChangeSource.asObservable();
  public inputModelChange$ = this.inputModelChangeSource.asObservable();

  constructor(loggingService: LoggingService,
              modelTransformerService: ModelTransformerService,
              storageService: StorageService,
              http: Http) {
    this.loggingService = loggingService;
    this.modelTransformerService = modelTransformerService;
    this.storageService = storageService;
    this.http = http;

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
            const sheet: InputSheet = JsonConvert.deserializeString(fileReader.result, InputSheet) ;
            resolve(sheet);
          } else {
            reject('Could not read file');
          }
        };

        if (file != null) {
          fileReader.readAsText(file);
        }
      }
    );
  }

  /**
   * Load a sheet. This method should be used to load a new sheet into
   * this application. It will both load the new sheet and persist
   * in local storage.
   *
   * @param {InputSheet} sheet
   * @param {Boolean} true if this is a new sheet, false if it comes from local storage
   */
  public loadSheet(sheet: InputSheet, isNew: boolean): void {

    this.setInputModel(sheet);

    this.modelTransformerService.transform(sheet)
      .then(outputSheet => this.setOutputModel(outputSheet)).catch(any => this.setFallbackOutputModel())

    if (isNew) {
      this.storageService.storeSheet(sheet);
    }
  }

  /**
   * Return the current outputSheet.
   *
   * @returns {OutputSheet}
   */
  public getSheet(): OutputSheet {
    return this.outputModel;
  }

  private handleStoredSheet(sheet: InputSheet): void {
      this.loadSheet(sheet, false);
  }

  private initSheet(): void {
    this.storageService.getCurrentSheet().then(sheet => this.handleStoredSheet(sheet)).catch(any => this.initEmptyOutputSheet());
  }

  private initEmptyOutputSheet(): void {
    const emptySheet: OutputSheet = new OutputSheetImpl();
    this.setOutputModel(emptySheet);
  }

  private setInputModel(inputSheet: InputSheet): void {
    this.inputModel = inputSheet;
    this.inputModelChangeSource.next(inputSheet);
  }

  private setOutputModel(outputSheet: OutputSheet): void {
    this.outputModel = outputSheet;
    this.outputModelChangeSource.next(outputSheet);
  }

  private setFallbackOutputModel(): void {
    this.http.get(ModelService.FALLBACK_MODEL).toPromise()
      .then(response => this.setOutputModel(response.json()))
      .catch(error => this.loggingService.error('Unable to fetch fallback sheet. ' + error))
  }
}
