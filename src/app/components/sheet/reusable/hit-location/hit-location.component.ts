import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-hit-location',
  templateUrl: './hit-location.component.html',
  styleUrls: [
    './hit-location.component.scss',
    '../../sheet.component.scss'
  ]
})
export class HitLocationComponent extends SheetReadingComponent {
}
