import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Template} from '../../../../models/template/template.model';

@Component({
  selector: 'gurpsy-select-sheet-button',
  templateUrl: './select-sheet-button.component.html',
  styleUrls: ['./select-sheet-button.component.scss']
})
export class SelectSheetButtonComponent {

  @Input()
  public template: Template;

  @Input()
  public disabled: false;

  @Output() public click: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.template = new Template();
  }

  onClick(): void {
    this.click.next();
  }
}
