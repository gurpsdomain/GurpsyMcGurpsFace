import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SettingsService} from '../../front-end/settings/settings.service';
import {Settings} from '../../../models/settings/settings.model';

export enum SheetBodyContent {
  GENERAL,
  ADVANTAGES,
  SKILLS,
  MAGIC,
  EQUIPMENT,
  NOTES
}

@Injectable()
export class SheetBodyService {

  private static DEFAULT_BODY_CONTENT = SheetBodyContent.GENERAL

  private sheetBodyContentSource = new Subject<SheetBodyContent>();
  private bodyContent: SheetBodyContent = SheetBodyService.DEFAULT_BODY_CONTENT;

  public sheetBodyChange$ = this.sheetBodyContentSource.asObservable();

  constructor(private settingsService: SettingsService) {
    this.initSheetBodyContent();
  }

  /**
   * Set the SheetBodyContent.
   *
   * @param {SheetBodyContent} sheetBodyContent
   */
  public setSheetBodyContent(sheetBodyContent: SheetBodyContent): void {
    this.settingsService.setBodyContent(sheetBodyContent);
    this.handleSheetBodyChange(sheetBodyContent);
  }

  private handleSheetBodyChange(sheetBodyContent: SheetBodyContent): void {

    if (this.isSheetBodyContentInvalid(sheetBodyContent)) {
      console.log('WARNING - Invalid ReadSheet Body Content stored in Local Storage: ', sheetBodyContent);
      return;
    }

    this.bodyContent = sheetBodyContent;
    this.sheetBodyContentSource.next(sheetBodyContent);
  }

  private initSheetBodyContent(): void {
    this.settingsService.getBodyContent().then(bodyContent =>
      this.setSheetBodyContent(bodyContent)).catch(err =>
      this.setSheetBodyContent(SheetBodyService.DEFAULT_BODY_CONTENT));
    this.settingsService.settingsChange$
      .subscribe(settings => this.handleSheetBodyChange(this.getValueOfBodyContent(settings)));
  }

  private isSheetBodyContentInvalid(sheetBodyContent: SheetBodyContent): boolean {
    return typeof SheetBodyContent[sheetBodyContent] === 'undefined';
  }

  private getValueOfBodyContent(settings: Settings): SheetBodyContent {
    if (settings && settings.bodyContent) {
      return settings.bodyContent.valueOf();
    } else {
      return SheetBodyService.DEFAULT_BODY_CONTENT;
    }
  }
}


