import {Component} from '@angular/core';
import {SheetUpdatingComponent} from '../../../sheet-updating.component';
import {DescriptionUpdaterComponent} from '../../../dialoges/template-updaters/description-updater/description-updater.component';
import {CustomDialogInitiatingComponent} from '../../../custom-dialog-initiating.component';

@Component({
  selector: 'gurpsy-description',
  templateUrl: './description.component.html',
  styleUrls: ['../../sheet.component.scss',
    'description.component.scss']
})
export class DescriptionComponent extends SheetUpdatingComponent<DescriptionUpdaterComponent> implements CustomDialogInitiatingComponent {

  public setComponentType(): void {
    this.dialogType = DescriptionUpdaterComponent;
  }
}

