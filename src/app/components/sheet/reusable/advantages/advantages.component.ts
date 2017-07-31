import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-advantages',
  templateUrl: 'advantages.component.html',
  styleUrls: ['./advantages.component.scss',
    '../../sheet.component.scss'
  ]
})
export class AdvantagesComponent extends SheetReadingComponent {
}
