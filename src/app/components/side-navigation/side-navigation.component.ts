import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {SheetBodyService, SheetBodyContent} from '../../services/front-end/sheet-body/sheet-body.service';
import {ModelService} from '../../services/front-end/model/model.service';
import {OutputSheet} from '../../models/sheet/output/output.sheet.model';

@Component({
  selector: 'gurpsy-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Output() onShowLibrary: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

  public sheetBodyComponents = SheetBodyContent;
  public sheetBodyContent: SheetBodyContent = SheetBodyContent.GENERAL;
  public showLibrary = false;

  public sheet: OutputSheet;

  constructor(private sheetBodyService: SheetBodyService, private modelService: ModelService) {
  }

  ngOnInit(): void {
    this.sheetBodyService.sheetBodyChange$.subscribe(sheetBodyContent => this.sheetBodyContent = sheetBodyContent);

    this.sheet = this.modelService.getSheet();
    this.modelService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
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


