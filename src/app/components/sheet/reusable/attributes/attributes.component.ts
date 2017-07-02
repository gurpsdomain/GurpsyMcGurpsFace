import {Component} from '@angular/core';
import {ModelReadingComponent} from '../../../model-reading.component';

@Component({
  selector: 'gurpsy-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: [
    './attributes.component.scss',
    '../../sheet.component.scss'
  ]
})
export class AttributesComponent extends ModelReadingComponent {
}
