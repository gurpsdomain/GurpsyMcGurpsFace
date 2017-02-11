import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {Sheet} from '../../../../model/sheet/sheet';
import {SheetMap, SheetMapEntry} from '../../../../model/json/sheetmap';
import {SheetMapImpl, SheetMapEntryImpl} from '../../../../model/json/sheetmap-impl';

@Injectable()
export class SheetStorageDelegate {

  private static STORAGE_KEY = '.sheet';

  private subjectChangeSource = new Subject<string>();
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor() {
    this.initStorageListener();
  }

  public persist(sheet: Sheet): void {
    let jsonSheet = JSON.stringify(sheet);
    let sheetName = this.getSheetNameKey(sheet);
    localStorage.setItem(this.getSheetStorageKey(sheetName), jsonSheet);
    this.addToSheetMapper(sheet);
  }

  public retrieveCurrent(): Promise<Sheet> {
    let sheetMap: SheetMap = this.getSheetMap();

    if (!sheetMap) {
      return Promise.reject('WARNING - Sheet unavailable');
    }

    let currentSheetName: string = sheetMap.current;
    let currentSheetKey: string;

    for (let sheet of sheetMap.sheets) {
      if (currentSheetName === sheet.name) {
        currentSheetKey = sheet.sheet;
        break;
      }
    }

    return this.retrieve(currentSheetKey);
  }

  public retrieve(characterName: string): Promise<Sheet> {
    let sheet: string = localStorage.getItem(this.getSheetStorageKey(characterName));

    if (sheet) {
      return Promise.resolve(JSON.parse(sheet));
    } else {
      return Promise.reject('WARNING - Sheet unavailable');
    }
  }

  public retrieveSheets(): Promise<SheetMap> {
    let sheetMap: SheetMap = this.getSheetMap();

    if (sheetMap) {
      return Promise.resolve(sheetMap);
    } else {
      return Promise.reject('WARNING - Sheet unavailable');
    }
  }

  private change(theme: string) {
    this.subjectChangeSource.next(theme);
  }

  private getSheetName(sheet: Sheet): string {
    return sheet.identity.name;
  }

  private getSheetNameKey(sheet: Sheet): string {
    let sheetNameKey: string = this.getSheetName(sheet).replace(' ', '-').toLowerCase();
    return sheetNameKey;
  }

  private addToSheetMapper(sheet: Sheet): void {
    let sheetMap: SheetMap = this.getSheetMap();

    if (!sheetMap) {
      sheetMap = new SheetMapImpl();
      sheetMap.sheets = [];
    }

    sheetMap.current = this.getSheetName(sheet);
    this.updateSheetMap(sheetMap, sheet);
    this.persistSheetMap(sheetMap);
  }

  private updateSheetMap(sheetMap: SheetMap, sheet: Sheet): void {
    let sheetMapSheetEntry: SheetMapEntry = new SheetMapEntryImpl();
    sheetMapSheetEntry.name = this.getSheetName(sheet);
    sheetMapSheetEntry.sheet = this.getSheetNameKey(sheet);
    sheetMap.sheets.push(sheetMapSheetEntry);
  }

  private persistSheetMap(sheetMap: SheetMap): void {
    localStorage.setItem(this.getSheetMapStorageKey(), JSON.stringify(sheetMap));
  }

  private getSheetMap(): SheetMap {
    let sheetMap: string = localStorage.getItem(this.getSheetMapStorageKey());
    return JSON.parse(sheetMap);
  }

  private getSheetMapStorageKey(): string {
    return StorageService.STORAGE_KEY + SheetStorageDelegate.STORAGE_KEY;
  }

  private getSheetStorageKey(characterName: string): string {
    return StorageService.STORAGE_KEY + SheetStorageDelegate.STORAGE_KEY + '.' + characterName;
  }

  private initStorageListener() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key.includes(this.getSheetMapStorageKey())) {
      this.change(event.newValue);
    }
  }
}
