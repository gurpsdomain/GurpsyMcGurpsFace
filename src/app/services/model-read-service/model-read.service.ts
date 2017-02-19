import {Injectable} from '@angular/core';
import {Sheet} from '../../model/sheet/sheet';
import {Identity} from '../../model/sheet/identity';
import {PlayerInformation} from '../../model/sheet/player-information';
import {Points} from '../../model/sheet/points';
import {JsonService} from '../json-service/json.service';
import {Subject} from 'rxjs';
import {StorageService} from '../storage-service/storage.service';
import {JsonSheet} from '../../model/json/sheet';

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
    this.jsonService.loadFile(file).then(
      sheet => this.useSheet(sheet));
  }

  private useSheet(sheet: JsonSheet): void {
    this.setSheet(sheet);
    this.persistSheet(sheet);
  }

  private setSheet(sheet: JsonSheet): void {
    let readModel: Sheet = this.createReadModel(sheet);
    this.model = readModel;
    this.modelChangeSource.next(readModel);
  }

  private persistSheet(sheet: JsonSheet): void {
    this.storageService.storeSheet(sheet);
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

    this.model = emptySheet;
  }

  private createReadModel(jsonSheet: JsonSheet): Sheet {
    let sheet: Sheet = new Sheet();
    sheet.identity = new Identity();
    sheet.identity.name = jsonSheet.metaData.identity.name;
    sheet.identity.religion = jsonSheet.metaData.identity.religion;
    sheet.identity.title = jsonSheet.metaData.identity.title;
    sheet.playerInformation = new PlayerInformation();
    sheet.playerInformation.campaign = jsonSheet.metaData.playerInformation.campaign;
    sheet.playerInformation.creationDate = jsonSheet.metaData.playerInformation.createdOn;
    sheet.playerInformation.player = jsonSheet.metaData.playerInformation.player;
    sheet.points = new Points();
    sheet.points.earned = jsonSheet.points.unspent;
    sheet.points.advantages = jsonSheet.points.advantages;
    sheet.points.disadvantages = jsonSheet.points.disadvantages;
    sheet.points.skills = jsonSheet.points.skills;
    sheet.points.spells = jsonSheet.points.spells;
    sheet.points.total = jsonSheet.points.total;
    sheet.description = jsonSheet.metaData.description.age;

    return sheet;
  }
}
