import {Component, Output, EventEmitter} from '@angular/core';
import {SheetBodyService, SheetBodyContent} from '../../services/sheet-body-service/sheet-body.service';

@Component({
  selector: 'gurpsy-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {

  @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();
  public sheetBodyComponents = SheetBodyContent;
  public sheetBodyContent: SheetBodyContent = SheetBodyContent.GENERAL;

  private sheetBodyService: SheetBodyService;

  constructor(sheetBodyService: SheetBodyService) {
    this.sheetBodyService = sheetBodyService;

    this.sheetBodyService.sheetBodyChange$.subscribe(sheetBodyContent => this.sheetBodyContent = sheetBodyContent);
  }

  public onCloseSideNav(): void {
    this.onCloseSideNavigation.next();
  }

  public onSheetBodyClick(sheetBodyComponent: SheetBodyContent): void {
    this.sheetBodyService.setSheetBodyContent(sheetBodyComponent);
  }
}
