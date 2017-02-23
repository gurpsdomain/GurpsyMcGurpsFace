import {Component} from '@angular/core';

@Component({
  selector: 'gurpsy-sheet-body',
  templateUrl: './sheet-body.component.html',
  styleUrls: ['../sheet.component.scss']
})
export class SheetBodyComponent {

  public bodyContent: SheetBodyComponents = SheetBodyComponents.NOTES;
  public sheetBodyComponents = SheetBodyComponents;
}

export enum SheetBodyComponents {
  ATTRIBUTES,
  ADVANTAGES,
  SKILLS,
  MAGIC,
  EQUIPMENT,
  NOTES
}
