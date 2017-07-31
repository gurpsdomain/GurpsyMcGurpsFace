import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: [
    './attributes.component.scss',
    '../../sheet.component.scss'
  ]
})
export class AttributesComponent extends SheetReadingComponent {
}
