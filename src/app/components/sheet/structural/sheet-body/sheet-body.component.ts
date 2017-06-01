import {Component, OnInit} from '@angular/core';
import {SheetBodyService, SheetBodyContent} from '../../../../services/front-end/sheet-body/sheet-body.service';

@Component({
  selector: 'gurpsy-sheet-body',
  templateUrl: 'sheet-body.component.html',
  styleUrls: ['../../sheet.component.scss']
})
export class SheetBodyComponent implements OnInit {

  public bodyContent: SheetBodyContent = SheetBodyContent.GENERAL;
  public sheetBodyComponents = SheetBodyContent;

  constructor(private sheetBodyService: SheetBodyService) {
  }

  public ngOnInit(): void {
    this.sheetBodyService.sheetBodyChange$.subscribe(sheetBodyContent => this.bodyContent = sheetBodyContent);
  }
}
