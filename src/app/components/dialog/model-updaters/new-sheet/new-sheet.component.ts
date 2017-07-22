import {Component} from '@angular/core';
import {ModelFactoryService} from '../../../../factories/model/model-factory.service';
import {ModelUpdaterDialogComponent} from '../model-updater-dialog.component';

@Component({
  templateUrl: './new-sheet.component.html',
  styleUrls: ['new-sheet.component.scss'],
  providers: [ModelFactoryService]
})
export class NewSheetComponent extends ModelUpdaterDialogComponent {
}
