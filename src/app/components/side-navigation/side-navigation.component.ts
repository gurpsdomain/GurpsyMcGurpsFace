import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: 'side-navigation.component.html',
  styleUrls: ['side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCloseSideNav(){
    this.onCloseSideNavigation.next();
  }

}
