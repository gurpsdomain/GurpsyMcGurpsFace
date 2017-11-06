import {Component} from '@angular/core';
import {SheetViewingComponent} from '../../../sheet-viewing.component';

@Component({
  selector: 'gurpsy-hit-location',
  templateUrl: './hit-location.component.html',
  styleUrls: [
    './hit-location.component.scss',
    '../../sheet.component.scss'
  ]
})
export class HitLocationComponent extends SheetViewingComponent {
}
