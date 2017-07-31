import {Component} from '@angular/core';
import {SheetReadingComponent} from '../../../sheet-reading.component';

@Component({
  selector: 'gurpsy-notes',
  templateUrl: 'notes.component.html',
  styleUrls: [
    './notes.component.scss',
    '../../sheet.component.scss'
  ]
})
export class NotesComponent extends SheetReadingComponent {
}
