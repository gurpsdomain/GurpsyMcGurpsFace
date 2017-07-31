import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-encumbrance',
  templateUrl: './encumbrance.component.html',
  styleUrls: [
    './encumbrance.component.scss',
    '../../sheet.component.scss'
  ]
})
export class EncumbranceComponent extends SheetReadingComponent {
}
