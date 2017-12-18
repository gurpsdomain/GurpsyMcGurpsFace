import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SheetViewingComponent} from '../../sheet-viewing.component';

@Component({
  selector: 'gurpsy-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent extends SheetViewingComponent implements OnInit {

  @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    super.ngOnInit();
  }

  public onCloseSideNav(): void {
    this.onCloseSideNavigation.next();
  }
}


