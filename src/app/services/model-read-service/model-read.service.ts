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

  /**
   * Set the current sheet to the one loaded through this file. A json file
   * is expected and it should abide to the interface as defined in ../../model/sheet.
   *
   * @param file
   */
  public loadSheetFromFile(file: File): void {
    this.jsonService.loadFile(file).then(
      sheet => this.useSheet(sheet));
  }

  /**
   * Set the current sheet to the given sheet. Likely this is an already saved instance of a Sheet.
   *
   * @param sheet
   */
  public loadSheet(sheet: Sheet): void {
    this.useSheet(sheet);
  }

  /**
   * Return the current sheet.
   *
   * @returns {Sheet}
   */
  public getSheet(): Sheet {
    return this.model;
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

  private initSheet(): void {
    this.initEmptySheet();
    this.storageService.getCurrentSheet().then(sheet => this.setSheet(sheet)).catch(any => this.initEmptySheet());
  }

  private initEmptySheet(): void {
    let emptySheet: Sheet = new SheetImpl();
    this.setSheet(emptySheet);
  }
}
