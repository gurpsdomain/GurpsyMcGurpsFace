import {Component} from '@angular/core';
import {SheetViewingComponent} from '../../../sheet-viewing.component';

@Component({
  selector: 'gurpsy-notes',
  templateUrl: 'notes.component.html',
  styleUrls: [
    './notes.component.scss',
    '../../sheet.component.scss'
  ]
})
export class NotesComponent extends SheetViewingComponent {
}
