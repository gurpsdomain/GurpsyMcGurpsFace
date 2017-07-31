import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-skills',
  templateUrl: 'skills.component.html',
  styleUrls: [
    './skills.component.scss',
    '../../sheet.component.scss'
  ]
})
export class SkillsComponent extends SheetReadingComponent {
}
