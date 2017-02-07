import {Injectable} from '@angular/core';
import {Sheet} from '../../model/sheet/sheet';
import {Identity} from '../../model/sheet/identity';
import {PlayerInformation} from '../../model/sheet/player-information';
import {Points} from '../../model/sheet/points';
import {JsonService} from '../json-service/json.service';
import {Subject} from 'rxjs';
import {StorageService} from '../storage-service/storage.service';

@Injectable()
export class ModelReadService {

  private model: Sheet;
  private jsonService: JsonService;
  private storageService: StorageService;

  private modelChangeSource = new Subject<Sheet>();

  public modelChange$ = this.modelChangeSource.asObservable();

  constructor(jsonService: JsonService, storageService: StorageService) {
    this.jsonService = jsonService;
    this.storageService = storageService;

    this.initSheet();
  }

  public loadSheet(file: File) {
    this.jsonService.createReadModelFromFile(file).then(
      sheet => this.useSheet(sheet));
  }

  private useSheet(sheet: Sheet): void {
    this.setSheet(sheet);
    this.persistSheet(sheet);
  }

  private setSheet(sheet: Sheet): void {
    this.model = sheet;
    this.modelChangeSource.next(sheet);
  }

  private persistSheet(sheet: Sheet): void {

    this.storageService.presistSheet(sheet);
  }

  public getSheet(): Sheet {
    return this.model;
  }

  private initSheet(): void {
    this.initEmptySheet();
    this.storageService.getCurrentSheet().then(sheet => this.setSheet(sheet)).catch(any => this.initEmptySheet());
  }

  private initEmptySheet(): void {
    let emptySheet: Sheet = new Sheet();

    emptySheet.identity = new Identity();
    emptySheet.playerInformation = new PlayerInformation();
    emptySheet.points = new Points();

    this.setSheet(emptySheet);
  }
}
