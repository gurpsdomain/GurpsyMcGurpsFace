import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-description',
  templateUrl: 'description.component.html',
  styleUrls: ['../../sheet.component.scss',
    'description.component.scss']
})
export class DescriptionComponent extends SheetReadingComponent {
}
