import {Component} from '@angular/core';
import {SheetViewingComponent} from '../../../components/sheet-viewing.component';

@Component({
  selector: 'gurpsy-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: [
    './attributes.component.scss',
    '../../sheet.component.scss'
  ]
})
export class AttributesComponent extends SheetViewingComponent {
}
