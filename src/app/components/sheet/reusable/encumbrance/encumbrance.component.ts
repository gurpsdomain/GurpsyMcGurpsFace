import {Component} from '@angular/core';
import {ModelReadingComponent} from '../../../model-reading.component';

@Component({
  selector: 'gurpsy-encumbrance',
  templateUrl: './encumbrance.component.html',
  styleUrls: [
    './encumbrance.component.scss',
    '../../sheet.component.scss'
  ]
})
export class EncumbranceComponent extends ModelReadingComponent {
}
