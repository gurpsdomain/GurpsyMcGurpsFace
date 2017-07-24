import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageService} from '../../storage.service';
import {Template} from '../../../../../models/sheet/template/template.model';
import {Sheets} from '../../../../../models/sheet/sheets.model';
import {LoggingService} from '../../../logging/logging.service';
import {JsonConvert} from 'json2typescript';

@Injectable()
export class SheetStorageDelegate {

  private static STORAGE_KEY = '.sheets';

  private subjectChangeSource = new Subject<Sheets>();

  /**
   * Register to this observable to be notified when the value is changed
   * in Local Storage.
   *
   * @type {Observable<Sheets>}
   */
  public valueChange$ = this.subjectChangeSource.asObservable();

  constructor(private loggingService: LoggingService) {
    window.addEventListener(StorageService.STORAGE_EVENT_LISTENER_KEY, (event: StorageEvent) => this.handleStorageChange(event));
  }

  /**
   * Set the given model as the Current model in Local Storage.
   *
   * @param sheet: Sheet
   */
  public setCurrent(sheet: Template): void {
    const sheets: Sheets = this.getSheets();

    if (!this.isCurrent(sheets, sheet)) {
      this.addCurrentAsPrevious(sheets);
    }

    this.removeFromPrevious(sheets, sheet);
    sheets.current = sheet;

    this.persist(sheets);
  }

  /**
   * Retrieve the Current Sheet for Local Storage.
   *
   * @returns Promise<Sheet> or an empty promise if there is no current model.
   */
  public retrieveCurrent(): Promise<Template> {
    const current: Template = this.getCurrentSheet();

    return Promise.resolve(current);
  }

  /**
   * Retrieve an array of Previously Opened Sheets from Local Storage.
   *
   * @returns Promise<Sheet[]> or an empty promise if there are no previously opened sheets.
   */
  public retrievePrevious(): Promise<Template[]> {
    const previous: Template[] = this.getPreviouslyOpenedSheets();

    return Promise.resolve(previous);
  }

  /**
   * Retrieve both the Current model and the Previously Opened model.
   *
   * @returns Promise<Sheet[]> or an empty promise if there are no current and previously
   *          opened sheets.
   */
  public retrieveAll(): Promise<Template[]> {
    const current: Template = this.getCurrentSheet();
    const all: Template[] = this.getPreviouslyOpenedSheets();
    all.push(current);

    return Promise.resolve(all);
  }

  /**
   * Remove the given model from the list of Previously Opened sheets in Local Storage.
   * @param sheetsToRemove : Sheet[]
   */
  public remove(sheetsToRemove: Template[]): void {
    const previouslyOpenedSheets = this.getPreviouslyOpenedSheets();

    const newSheetList: Template[] = [];

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
  public clear(): void {
    localStorage.removeItem(this.getStorageKey())
    this.change(undefined);
  }

  private persist(sheets: Sheets): void {
    const jsonSheets = JSON.stringify(sheets);

    localStorage.setItem(this.getStorageKey(), jsonSheets);
  }

  private removeFromPrevious(sheets: Sheets, sheet: Template): Sheets {
    const newSheets: Template[] = [];

    for (const sheetIterator of sheets.previous) {
      if (sheetIterator && sheetIterator.name !== sheet.name) {
        newSheets.push(sheetIterator);
      }
    }

    sheets.previous = newSheets;
    return sheets;
  }

  private isCurrent(sheets: Sheets, sheet: Template): boolean {
    return sheets.current && sheets.current.name === sheet.name;
  }

  private addCurrentAsPrevious(sheets: Sheets): void {
    sheets.previous.push(sheets.current);
  }

  private getSheets(): Sheets {
    const json: string = localStorage.getItem(this.getStorageKey());

    return this.deserialize(json);
  }


  private deserialize(json): Sheets {
    let sheets: Sheets = new Sheets();

    if (json) {
      try {
        sheets = JsonConvert.deserializeString(json, Sheets);
      } catch (ex) {
        this.loggingService.error('Unable to retrieve Sheets from Local Storage.', ex)
      }
    }

    return sheets;
  }

  private getCurrentSheet(): Template {
    return this.getSheets().current;
  }

  private getPreviouslyOpenedSheets(): Template[] {
    return this.getSheets().previous;
  }

  private getStorageKey(): string {
    return StorageService.STORAGE_KEY + SheetStorageDelegate.STORAGE_KEY;
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.getStorageKey()) {
      const sheets = this.deserialize(event.newValue);
      this.change(sheets);
    }
  }

  private change(sheet: Sheets) {
    this.subjectChangeSource.next(sheet);
  }
}
