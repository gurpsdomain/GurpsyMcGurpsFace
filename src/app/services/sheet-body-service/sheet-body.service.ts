import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ConfigService} from '../config-service/config.service';

@Injectable()
export class SheetBodyService {

  private sheetBodyContentSource = new Subject<SheetBodyContent>();

  public sheetBodyChange$ = this.sheetBodyContentSource.asObservable();

  private bodyContent: SheetBodyContent = SheetBodyContent.GENERAL;

  private configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
    this.initSheetBodyContent();
  }

  /**
   * Set the SheetBodyContent.
   *
   * @param sheetBodyContent
   */
  public setSheetBodyContent(sheetBodyContent: SheetBodyContent): void {
    this.bodyContent = sheetBodyContent;
    this.configService.setbodyContent(sheetBodyContent);
    this.handleSheetBodyChange(sheetBodyContent);
  }

  private handleSheetBodyChange(sheetBody: SheetBodyContent): void {
    this.sheetBodyContentSource.next(sheetBody);
  }

  private initSheetBodyContent(): void {
    this.configService.getBodyContent().then(bodyContent =>
      this.setSheetBodyContent(bodyContent)).catch(err =>
      this.setSheetBodyContent(SheetBodyContent.GENERAL));
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
