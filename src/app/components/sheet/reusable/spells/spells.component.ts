import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-spells',
  templateUrl: 'spells.component.html',
  styleUrls: [
    './spells.component.scss',
    '../../sheet.component.scss'
  ]
})
export class SpellsComponent extends SheetReadingComponent {
}
