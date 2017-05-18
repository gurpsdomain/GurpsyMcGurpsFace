import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {OutputSheets, OutputSheet} from '../../../../../models/sheet/output';
import {OutputSheetsImpl} from '../../../../../models/sheet/output-impl';
import {JsonService} from '../../../json/json.service';

@Injectable()
export class SheetStorageDelegate {

  private static STORAGE_KEY = '.sheets';

  private jsonService: JsonService;

  private subjectChangeSource = new Subject<string>();

  /**
   * Register to this observable to be notified when the value is changed
   * in Local Storage.
   *
   * @type Observable<string>
   */
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor(jsonService: JsonService) {

    this.jsonService = jsonService;

    window.addEventListener(StorageService.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Set the given sheet as the Current sheet in Local Storage.
   *
   * @param sheet: OutputSheet
   */
  public setCurrent(sheet: OutputSheet): void {
    const sheets: OutputSheetsImpl = this.getSheets();

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
  public retrieveCurrent(): Promise<OutputSheet> {
    const current: OutputSheet = this.getCurrentSheet();

    return Promise.resolve(current);
  }

  /**
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<OutputSheet[]> or an empty promise if there are no previously opened sheets.
   */
  public retrievePrevious(): Promise<OutputSheet[]> {
    const previous: OutputSheet[] = this.getPreviouslyOpenedSheets();

    return Promise.resolve(previous);
  }

  /**
   * Retrieve both the Current sheet and the Previously Opened sheet.
   *
   * @returns Promise<OutputSheet[]> or an empty promise if there are no current and previously
   *          opened sheets.
   */
  public retrieveAll(): Promise<OutputSheet[]> {
    const current: OutputSheet = this.getCurrentSheet();
    const all: OutputSheet[] = this.getPreviouslyOpenedSheets();
    all.push(current);

    return Promise.resolve(all);
  }

  /**
   * Remove the given sheet from the list of Previously Opened sheets in Local Storage.
   * @param sheetsToRemove : OutputSheet[]
   */
  public remove(sheetsToRemove: OutputSheet[]): void {
    const previouslyOpenedSheets = this.getPreviouslyOpenedSheets();

    const newSheetList: OutputSheet[] = [];

    for (const sheet of previouslyOpenedSheets) {
      let remove = false;
      for (const sheetToRemove of sheetsToRemove) {
        if (sheet.metaData.identity.name === sheetToRemove.metaData.identity.name) {
          remove = true;
        }
      }

      if (!remove) {
        newSheetList.push(sheet);
      }
    }

    const sheets: OutputSheets = this.getSheets();
    sheets.previous = newSheetList;

    this.persist(sheets);
  }

  private persist(sheets: OutputSheets): void {
    const jsonSheets = JSON.stringify(sheets);

    localStorage.setItem(this.getStorageKey(), jsonSheets);
  }

  private removeFromPrevious(sheets: OutputSheets, sheet: OutputSheet): OutputSheets {
    const newSheets: OutputSheet[] = [];

    for (const sheetIterator of sheets.previous) {
      if (sheetIterator && sheetIterator.metaData.identity.name !== sheet.metaData.identity.name) {
        newSheets.push(sheetIterator);
      }
    }

    sheets.previous = newSheets;
    return sheets;
  }

  private isCurrent(sheets: OutputSheets, sheet: OutputSheet): boolean {
    return sheets.current && sheets.current.metaData.identity.name === sheet.metaData.identity.name;
  }

  private addCurrentAsPrevious(sheets: OutputSheets): void {
    sheets.previous.push(sheets.current);
  }

  private getSheets(): OutputSheets {
    const sheets: string = localStorage.getItem(this.getStorageKey());

    if (sheets) {
      return this.jsonService.parseJsonSheets(sheets);
    } else {
      return new OutputSheetsImpl();
    }
  }

  private getCurrentSheet(): OutputSheet {
    return this.getSheets().current;
  }

  private getPreviouslyOpenedSheets(): OutputSheet[] {
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
