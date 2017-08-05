import {Component} from '@angular/core';
import {SheetViewingComponent} from '../../../sheet-viewing.component';

@Component({
  selector: 'gurpsy-points',
  templateUrl: 'points.component.html',
  styleUrls: ['../../sheet.component.scss',
    'points.component.scss'
  ]
})
export class PointsComponent extends SheetViewingComponent {
}
