import {Component} from '@angular/core';
import {ModelReadingComponent} from '../../../model-reading.component';

@Component({
  selector: 'gurpsy-equipment',
  templateUrl: 'equipment.component.html',
  styleUrls: ['./equipment.component.scss',
    '/../../sheet.component.scss']
})
export class EquipmentComponent extends ModelReadingComponent {
}
