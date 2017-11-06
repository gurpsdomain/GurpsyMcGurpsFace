import {Component} from '@angular/core';
import {SheetViewingComponent} from '../../../sheet-viewing.component';

@Component({
  selector: 'gurpsy-encumbrance',
  templateUrl: './encumbrance.component.html',
  styleUrls: [
    './encumbrance.component.scss',
    '../../sheet.component.scss'
  ]
})
export class EncumbranceComponent extends SheetViewingComponent {
}
