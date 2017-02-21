import {Injectable} from '@angular/core';
import {JsonService} from '../json-service/json.service';
import {Subject} from 'rxjs';
import {StorageService} from '../storage-service/storage.service';
import {Sheet} from '../../model/sheet';
import {SheetImpl} from '../../model/sheet-impl';

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

  public loadSheetFromFile(file: File): void {
    this.jsonService.loadFile(file).then(
      sheet => this.useSheet(sheet));
  }

  public loadSheet(sheet: Sheet): void {
    this.useSheet(sheet);
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
    let emptySheet: Sheet = new SheetImpl();
    this.setSheet(emptySheet);
  }
}
