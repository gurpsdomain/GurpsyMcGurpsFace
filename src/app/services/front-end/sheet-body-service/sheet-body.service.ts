import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SettingsService} from '../../front-end/settings-service/settings.service';

@Injectable()
export class SheetBodyService {

  private sheetBodyContentSource = new Subject<SheetBodyContent>();
  public sheetBodyChange$ = this.sheetBodyContentSource.asObservable();

  private bodyContent: SheetBodyContent = SheetBodyContent.GENERAL;
  private configService: SettingsService;

  constructor(configService: SettingsService) {
    this.configService = configService;
    this.initSheetBodyContent();
  }

  /**
   * Set the SheetBodyContent.
   *
   * @param sheetBodyContent
   */
  public setSheetBodyContent(sheetBodyContent: SheetBodyContent): void {
    this.configService.setBodyContent(sheetBodyContent);
    this.handleSheetBodyChange(sheetBodyContent);
  }

  private handleSheetBodyChange(sheetBodyContent: SheetBodyContent): void {

    if (this.isSheetBodyContentInvalid(sheetBodyContent)) {
      console.log('WARNING - Invalid OutputSheet Body Content stored in Local Storage: ', sheetBodyContent);
      return;
    }

    this.bodyContent = sheetBodyContent;
    this.sheetBodyContentSource.next(sheetBodyContent);
  }

  private initSheetBodyContent(): void {
    this.configService.getBodyContent().then(bodyContent =>
      this.setSheetBodyContent(bodyContent)).catch(err =>
      this.setSheetBodyContent(SheetBodyContent.GENERAL));
    this.configService.getConfigObserver().subscribe(config => this.handleSheetBodyChange(config.bodyContent.valueOf()));
  }

  private isSheetBodyContentInvalid(sheetBodyContent: SheetBodyContent): boolean {
    return typeof SheetBodyContent[sheetBodyContent] === 'undefined';
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
