import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {InputSheet} from '../../../../../models/sheet/input/input.sheet.model';
import {Sheets} from '../../../../../models/sheet/sheets.model';

@Injectable()
export class SheetStorageDelegate {

  private static STORAGE_KEY = '.sheets';

  private subjectChangeSource = new Subject<string>();

  /**
   * Register to this observable to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<string>
   */
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor() {
    window.addEventListener(StorageService.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Set the given sheet as the Current sheet in Local Storage.
   *
   * @param sheet: OutputSheet
   */
  public setCurrent(sheet: InputSheet): void {
    const sheets: Sheets = this.getSheets();

    if (!this.isCurrent(sheets, sheet)) {
      this.addCurrentAsPrevious(sheets);
    }

    this.removeFromPrevious(sheets, sheet);
    sheets.current = sheet;

    this.persist(sheets);
  }

  /**
   * Retrieve the Current OutputSheet for Local Storage.
   *
   * @returns Promise<OutputSheet> or an empty promise if there is no current sheet.
   */
  public retrieveCurrent(): Promise<InputSheet> {
    const current: InputSheet = this.getCurrentSheet();

    return Promise.resolve(current);
  }

  /**
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<OutputSheet[]> or an empty promise if there are no previously opened sheets.
   */
  public retrievePrevious(): Promise<InputSheet[]> {
    const previous: InputSheet[] = this.getPreviouslyOpenedSheets();

    return Promise.resolve(previous);
  }

  /**
   * Retrieve both the Current sheet and the Previously Opened sheet.
   *
   * @returns Promise<OutputSheet[]> or an empty promise if there are no current and previously
   *          opened sheets.
   */
  public retrieveAll(): Promise<InputSheet[]> {
    const current: InputSheet = this.getCurrentSheet();
    const all: InputSheet[] = this.getPreviouslyOpenedSheets();
    all.push(current);

    return Promise.resolve(all);
  }

  /**
   * Remove the given sheet from the list of Previously Opened sheets in Local Storage.
   * @param sheetsToRemove : OutputSheet[]
   */
  public remove(sheetsToRemove: InputSheet[]): void {
    const previouslyOpenedSheets = this.getPreviouslyOpenedSheets();

    const newSheetList: InputSheet[] = [];

    for (const sheet of previouslyOpenedSheets) {
      let remove = false;
      for (const sheetToRemove of sheetsToRemove) {
        if (sheet.name === sheetToRemove.name) {
          remove = true;
        }
      }

      if (!remove) {
        newSheetList.push(sheet);
      }
    }

    const sheets: Sheets = this.getSheets();
    sheets.previous = newSheetList;

    this.persist(sheets);
  }

  /**
   * Clear all entries from Local Storage. After this method has finished all GurpsyMcGurpsFace related
   * entries should be removed.
   */
  public kill(): void {
    localStorage.removeItem(this.getStorageKey())
  }

  private persist(sheets: Sheets): void {
    const jsonSheets = JSON.stringify(sheets);

    localStorage.setItem(this.getStorageKey(), jsonSheets);
  }

  private removeFromPrevious(sheets: Sheets, sheet: InputSheet): Sheets {
    const newSheets: InputSheet[] = [];

    for (const sheetIterator of sheets.previous) {
      if (sheetIterator && sheetIterator.name !== sheet.name) {
        newSheets.push(sheetIterator);
      }
    }

    sheets.previous = newSheets;
    return sheets;
  }

  private isCurrent(sheets: Sheets, sheet: InputSheet): boolean {
    return sheets.current && sheets.current.name === sheet.name;
  }

  private addCurrentAsPrevious(sheets: Sheets): void {
    sheets.previous.push(sheets.current);
  }

  private getSheets(): Sheets {
    const sheets: string = localStorage.getItem(this.getStorageKey());

    if (sheets) {

      return JSON.parse(sheets)
    } else {
      return new Sheets();
    }
  }

  private getCurrentSheet(): InputSheet {
    return this.getSheets().current;
  }

  private getPreviouslyOpenedSheets(): InputSheet[] {
    return this.getSheets().previous;
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + SheetStorageDelegate.STORAGE_KEY;
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
