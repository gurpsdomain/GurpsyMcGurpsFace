import {Component, Input} from '@angular/core';
import {ModelReadingComponent} from '../../model-reading.component';

@Component({
  selector: 'gurpsy-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['avatar.component.scss']
})
export class AvatarComponent extends ModelReadingComponent {

  @Input() public width = '34px';
  @Input() public height = '34px';
}
