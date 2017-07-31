import {Component, Input} from '@angular/core';
import {SheetReadingComponent} from '../../sheet-reading.component';

@Component({
  selector: 'gurpsy-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['avatar.component.scss']
})
export class AvatarComponent extends SheetReadingComponent {

  @Input() public width = '34px';
  @Input() public height = '34px';
}
