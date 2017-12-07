import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SheetViewingComponent} from '../../sheet-viewing.component';
import {SheetService} from '../../../services/sheet/sheet.service';

@Component({
  selector: 'gurpsy-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent extends SheetViewingComponent implements OnInit {

  @Output() onShowLibrary: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

  public showLibrary = false;
  public showLibraryMenu = false;

  constructor(modelService: SheetService) {
    super(modelService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public onCloseSideNav(): void {
    this.onCloseSideNavigation.next();
  }

  public onLibraryClick(): void {
    this.onShowLibrary.next(this.toggleShowLibrary());
  }


  private toggleShowLibrary(): boolean {
    this.showLibrary = !this.showLibrary;
    return this.showLibrary;
  }
}


