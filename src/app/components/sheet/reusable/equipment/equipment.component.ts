import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-equipment',
  templateUrl: 'equipment.component.html',
  styleUrls: ['./equipment.component.scss',
    '/../../sheet.component.scss']
})
export class EquipmentComponent extends SheetReadingComponent {
}
