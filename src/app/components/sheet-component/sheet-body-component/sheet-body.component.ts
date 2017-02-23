import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gurpsy-sheet-body',
  templateUrl: './sheet-body.component.html',
  styleUrls: ['../sheet.component.scss']
})
export class SheetBodyComponent implements OnInit {

  public bodyContent: SheetBodyComponents = SheetBodyComponents.NOTES;
  public sheetBodyComponents = SheetBodyComponents;

  constructor() { }

  ngOnInit() {
  }
}

export enum SheetBodyComponents {
  NOTES,
  SKILLS
}
