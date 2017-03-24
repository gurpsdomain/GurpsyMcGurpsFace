import {Component} from '@angular/core';
import {SheetBodyService, SheetBodyContent} from '../../../../services/sheet-body-service/sheet-body.service';

@Component({
  selector: 'gurpsy-sheet-body',
  templateUrl: 'sheet-body.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class SheetBodyComponent {

  public bodyContent: SheetBodyContent = SheetBodyContent.GENERAL;

  public sheetBodyComponents = SheetBodyContent;

  private sheetBodyService: SheetBodyService;

  constructor(sheetBodyService: SheetBodyService) {
    this.sheetBodyService = sheetBodyService;

    this.sheetBodyService.sheetBodyChange$.subscribe(sheetBodyContent => this.bodyContent = sheetBodyContent);
  }
}

