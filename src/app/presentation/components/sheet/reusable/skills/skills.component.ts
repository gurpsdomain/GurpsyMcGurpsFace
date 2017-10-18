import {Component} from '@angular/core';
import {SheetViewingComponent} from '../../../sheet-viewing.component';

@Component({
  selector: 'gurpsy-skills',
  templateUrl: './skills.component.html',
  styleUrls: [
    './skills.component.scss',
    '../../sheet.component.scss'
  ]
})
export class SkillsComponent extends SheetViewingComponent {
}
