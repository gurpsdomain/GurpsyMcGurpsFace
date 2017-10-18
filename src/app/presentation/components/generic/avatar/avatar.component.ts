import {Component, Input} from '@angular/core';
import {SheetViewingComponent} from '../../sheet-viewing.component';

@Component({
  selector: 'gurpsy-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent extends SheetViewingComponent {

  @Input() public width = '34px';
  @Input() public height = '34px';
}
