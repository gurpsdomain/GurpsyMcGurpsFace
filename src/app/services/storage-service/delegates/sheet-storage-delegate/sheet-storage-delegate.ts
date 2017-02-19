import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {Sheets, SheetsImpl, JsonSheet} from '../../../../model/json/sheet';

@Injectable()
export class SheetStorageDelegate {

  private static STORAGE_KEY = '.previous';

  private subjectChangeSource = new Subject<string>();
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor() {
    this.initStorageListener();
  }

  public setCurrent(sheet: JsonSheet): void {
    let sheets: Sheets = this.getSheets();

    if (!this.isCurrent(sheets, sheet)) {
      this.addCurrentAsPrevious(sheets);
    }
    this.removeFromPrevious(sheets, sheet);
    sheets.current = sheet;
    this.persist(sheets);
  }

  public retrieveCurrent(): Promise<JsonSheet> {
    let sheets: Sheets = this.getSheets();
    let current: JsonSheet = sheets.current;

    if (current) {
      return Promise.resolve(current);
    } else {
      return Promise.reject('WARNING - Sheet unavailable');
    }
  }

  public retrievePrevious(): Promise<JsonSheet[]> {
    let sheets: Sheets = this.getSheets();
    let previous: JsonSheet[] = sheets.previous;

    if (previous && previous.length > 0) {
      return Promise.resolve(previous);
    } else {
      return Promise.reject('WARNING - Sheet unavailable');
    }
  }

  public retrieveAll(): Promise<JsonSheet[]> {
    let sheets: Sheets = this.getSheets();
    let all: JsonSheet[] = sheets.previous;
    all.push(sheets.current);

    if (all && all.length > 0) {
      return Promise.resolve(all);
    } else {
      return Promise.reject('WARNING - Sheet unavailable');
    }
  }

  private persist(sheets: Sheets): void {
    let jsonSheets = JSON.stringify(sheets);

    localStorage.setItem(this.getStorageKey(), jsonSheets);
  }

  private removeFromPrevious(sheets: Sheets, sheet: JsonSheet): Sheets {
    let newSheets: JsonSheet[] = [];

    for (let sheetIterator of sheets.previous) {
      if (sheetIterator && sheetIterator.metaData.identity.name !== sheet.metaData.identity.name) {
        newSheets.push(sheetIterator);
      }
    }

    sheets.previous = newSheets;
    return sheets;
  }

  private isCurrent(sheets: Sheets, sheet: JsonSheet): boolean {
    return sheets.current && sheets.current.metaData.identity.name === sheet.metaData.identity.name;
  }

  private addCurrentAsPrevious(sheets: Sheets): void {
    sheets.previous.push(sheets.current);
  }

  private getSheets(): Sheets {
    let sheets: string = localStorage.getItem(this.getStorageKey());

    if (sheets) {
      return JSON.parse(sheets);
    } else {
      return new SheetsImpl();
    }
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + SheetStorageDelegate.STORAGE_KEY;
  }

  private initStorageListener() {
    window.addEventListener('storage', (event: StorageEvent) => this.handleStorageChange(event));
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key.includes(this.getStorageKey())) {
      this.change(event.newValue);
    }
  }

  private change(theme: string) {
    this.subjectChangeSource.next(theme);
  }
}
