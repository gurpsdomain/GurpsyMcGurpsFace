import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'gurpsy-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {

    @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onCloseSideNav(): void {
        this.onCloseSideNavigation.next();
    }
}
