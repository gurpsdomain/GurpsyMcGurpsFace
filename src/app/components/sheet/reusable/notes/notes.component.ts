import {Component} from '@angular/core';
import {ModelUpdatingComponent} from '../../../model-updating.component';

@Component({
  selector: 'gurpsy-notes',
  templateUrl: 'notes.component.html',
  styleUrls: [
    './notes.component.scss',
    '../../sheet.component.scss'
  ]
})
export class NotesComponent extends ModelUpdatingComponent {
}
