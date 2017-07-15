import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {GurpsyComponent} from '../../../../gurpsy.component';
import {ModelFactoryService} from '../../../../factories/model/model-factory.service';

@Component({
  templateUrl: './new-sheet.component.html',
  styleUrls: ['new-sheet.component.scss'],
  providers: [ModelFactoryService]
})
export class NewSheetComponent {

  name: string;
  player: string;

  constructor(private dialogRef: MdDialogRef<GurpsyComponent>,
              private modelFactoryService: ModelFactoryService) {
  }

  public onOk(): void {
    const sheet = this.modelFactoryService.getInstance();
    sheet.name = this.name;
    sheet.player = this.player;

    this.dialogRef.close(sheet);
  }
}
