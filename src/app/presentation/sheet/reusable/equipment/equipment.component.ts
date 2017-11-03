import {Component} from '@angular/core';
import {SheetViewingComponent} from '../../../components/sheet-viewing.component';

@Component({
  selector: 'gurpsy-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss',
    '/../../sheet.component.scss']
})
export class EquipmentComponent extends SheetViewingComponent {
}
