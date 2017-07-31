import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-disadvantages',
  templateUrl: 'disadvantages.component.html',
  styleUrls: ['./disadvantages.component.scss',
    '../../sheet.component.scss'
  ]
})
export class DisadvantagesComponent extends SheetReadingComponent {
}
