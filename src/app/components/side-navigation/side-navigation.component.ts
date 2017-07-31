import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SheetBodyContent, SheetBodyService} from '../../services/front-end/sheet-body/sheet-body.service';
import {SheetReadingComponent} from '../sheet-reading.component';
import {SheetService} from '../../services/front-end/sheet/sheet.service';

@Component({
  selector: 'gurpsy-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent extends SheetReadingComponent implements OnInit {

  @Output() onShowLibrary: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

  public sheetBodyComponents = SheetBodyContent;
  public sheetBodyContent: SheetBodyContent = SheetBodyContent.GENERAL;
  public showLibrary = false;

  constructor(private sheetBodyService: SheetBodyService, modelService: SheetService) {
    super(modelService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.sheetBodyService.sheetBodyChange$.subscribe(sheetBodyContent => this.sheetBodyContent = sheetBodyContent);
  }

  public onCloseSideNav(): void {
    this.onCloseSideNavigation.next();
  }

  public onLibraryClick(): void {
    this.onShowLibrary.next(this.toggleShowLibrary());
  }

  public onSheetBodyClick(sheetBodyComponent: SheetBodyContent): void {
    this.showLibrary = false;
    this.onShowLibrary.next(false);
    this.sheetBodyService.setSheetBodyContent(sheetBodyComponent);
  }

  private toggleShowLibrary(): boolean {
    this.showLibrary = !this.showLibrary;
    return this.showLibrary;
  }
}


