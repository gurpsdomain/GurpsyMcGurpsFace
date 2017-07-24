import {Component} from '@angular/core';
import {TemplateFactoryService} from '../../../../factories/model/template-factory.service';
import {ModelUpdaterDialogComponent} from '../model-updater-dialog.component';

@Component({
  templateUrl: './new-sheet.component.html',
  styleUrls: ['new-sheet.component.scss'],
  providers: [TemplateFactoryService]
})
export class NewSheetComponent extends ModelUpdaterDialogComponent {
}
