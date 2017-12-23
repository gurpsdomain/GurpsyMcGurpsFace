import {Component} from '@angular/core';
import {TemplateUpdaterDialogComponent} from '../template-updater-dialog.component';
import {Unit} from '../../../../models/template/metadata/enums/unit';

@Component({
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.scss']
})
export class NewSheetComponent extends TemplateUpdaterDialogComponent {

  public unit = Unit;
}
