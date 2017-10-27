import {Component} from '@angular/core';
import {TemplateUpdaterDialogComponent} from '../template-updater-dialog.component';
import {Unit} from '../../../../models/sheet-template/metadata/enums/unit';

@Component({
  templateUrl: './description-updater.component.html',
  styleUrls: ['./description-updater.component.scss']
})
export class DescriptionUpdaterComponent extends TemplateUpdaterDialogComponent {

  public unit = Unit;
}
