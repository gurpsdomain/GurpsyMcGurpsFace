import {Component} from '@angular/core';
import {TemplateFactoryService} from '../../../../factories/template/template-factory.service';
import {TemplateUpdaterDialogComponent} from '../template-updater-dialog.component';

@Component({
  templateUrl: './new-sheet.component.html',
  styleUrls: []
})
export class NewSheetComponent extends TemplateUpdaterDialogComponent {
}