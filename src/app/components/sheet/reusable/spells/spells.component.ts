import {Component} from '@angular/core';
import {ModelReadingComponent} from '../../../model-reading.component';

@Component({
  selector: 'gurpsy-spells',
  templateUrl: 'spells.component.html',
  styleUrls: [
    './spells.component.scss',
    '../../sheet.component.scss'
  ]
})
export class SpellsComponent extends ModelReadingComponent {
}
