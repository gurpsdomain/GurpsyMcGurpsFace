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
    this.updateSheetMap(sheet);
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

  private updateSheetMap(sheet: Sheet): void {
    let sheetMap: SheetMap = this.getSheetMap();

    if (!this.sheetMapContains(sheetMap, sheet)) {
      this.addToSheetMap(sheetMap, sheet);
    }

    sheetMap.current = this.getSheetName(sheet);
    this.persistSheetMap(sheetMap);
  }

  private addToSheetMap(sheetMap: SheetMap, sheet: Sheet): void {
    let sheetMapSheetEntry: SheetMapEntry = this.createSheetMapEntry(sheet);
    sheetMap.sheets.push(sheetMapSheetEntry);
  }

  private createSheetMapEntry(sheet: Sheet): SheetMapEntry {
    let sheetMapSheetEntry: SheetMapEntry = new SheetMapEntryImpl();
    sheetMapSheetEntry.name = this.getSheetName(sheet);
    sheetMapSheetEntry.sheet = this.getSheetNameKey(sheet);
    return sheetMapSheetEntry;
  }

  private sheetMapContains(sheetMap: SheetMap, newSheet: Sheet): boolean {
    let contains = false;
    for (let sheet of sheetMap.sheets) {
      if (this.getSheetName(newSheet) === sheet.name) {
        contains = true;
        break;
      }
    }

    return contains;
  }

  private persistSheetMap(sheetMap: SheetMap): void {
    localStorage.setItem(this.getSheetMapStorageKey(), JSON.stringify(sheetMap));
  }

  private getSheetMap(): SheetMap {
    let sheetMap: string = localStorage.getItem(this.getSheetMapStorageKey());

    if (sheetMap) {
      return JSON.parse(sheetMap);
    } else {
      return new SheetMapImpl();
    }
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
