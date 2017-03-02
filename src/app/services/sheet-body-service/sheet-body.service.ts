import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SheetBodyService {

  private sheetBodyContentSource = new Subject<SheetBodyContent>();

  public sheetBodyChange$ = this.sheetBodyContentSource.asObservable();

  public bodyContent: SheetBodyContent = SheetBodyContent.GENERAL;

  private handleSheetBodyChange(sheetBody: SheetBodyContent): void {
    this.sheetBodyContentSource.next(sheetBody);
  }

  public setSheetBodyContent(sheetBodyContent: SheetBodyContent): void {
    this.bodyContent = sheetBodyContent;
    this.handleSheetBodyChange(sheetBodyContent);
  }
}

export enum SheetBodyContent {
  GENERAL,
  ADVANTAGES,
  SKILLS,
  MAGIC,
  EQUIPMENT,
  NOTES
}
