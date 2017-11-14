import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {SheetBodyContent} from './enums/sheet-body-content.enum';

@Injectable()
export class SheetBodyService {

  private static DEFAULT_BODY_CONTENT = SheetBodyContent.GENERAL;

  private sheetBodyContentSource = new Subject<SheetBodyContent>();
  private bodyContent: SheetBodyContent = SheetBodyService.DEFAULT_BODY_CONTENT;

  public sheetBodyChange$ = this.sheetBodyContentSource.asObservable();

  constructor() {
    this.setSheetBodyContent(SheetBodyContent.GENERAL);
  }

  /**
   * Set the SheetBodyContent.
   *
   * @param {SheetBodyContent} sheetBodyContent
   */
  public setSheetBodyContent(sheetBodyContent: SheetBodyContent): void {
    this.bodyContent = sheetBodyContent;
    this.sheetBodyContentSource.next(sheetBodyContent);
  }
}


