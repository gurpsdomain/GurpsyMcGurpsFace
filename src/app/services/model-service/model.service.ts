import {Injectable} from '@angular/core';
import {JsonService} from '../json-service/json.service';
import {Subject} from 'rxjs';
import {StorageService} from '../storage-service/storage.service';
import {OutputSheet, Points, Description, Identity, PlayerInformation} from '../../models/sheet/output';
import {SheetImpl} from '../../models/sheet/output-impl';

@Injectable()
export class ModelService {

  private model: OutputSheet;
  private jsonService: JsonService;
  private storageService: StorageService;
  private modelChangeSource = new Subject<OutputSheet>();

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
    this.jsonService.parseFile(file).then(
      sheet => this.useSheet(sheet));
  }

  /**
   * Set the current sheet to the given sheet. Likely this is an already saved instance of a OutputSheet.
   *
   * @param sheet
   */
  public loadSheet(sheet: OutputSheet): void {
    this.useSheet(sheet);
  }

  /**
   * Return the current sheet.
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

  private useSheet(sheet: OutputSheet): void {
    this.setSheet(sheet);
    this.persistSheet(sheet);
  }

  private setSheet(sheet: OutputSheet): void {
    this.model = sheet;
    this.modelChangeSource.next(sheet);
  }

  private persistSheet(sheet: OutputSheet): void {
    this.storageService.storeSheet(sheet);
  }

  private initSheet(): void {
    this.initEmptySheet();
    this.storageService.getCurrentSheet().then(sheet => this.handleStoredSheet(sheet)).catch(any => this.initEmptySheet());
  }

  private initEmptySheet(): void {
    const emptySheet: OutputSheet = new SheetImpl();
    this.setSheet(emptySheet);
  }
}
