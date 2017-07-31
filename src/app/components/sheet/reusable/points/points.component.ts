import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-points',
  templateUrl: 'points.component.html',
  styleUrls: ['../../sheet.component.scss',
    'points.component.scss'
  ]
})
export class PointsComponent extends SheetReadingComponent {
}
