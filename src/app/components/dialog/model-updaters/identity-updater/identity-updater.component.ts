import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ModelFactoryService} from '../../../../factories/model/model-factory.service';
import {IdentityDTO} from '../../../../models/sheet/read/identity.model';

@Component({
  templateUrl: './identity-updater.component.html',
  styleUrls: ['./identity-updater.component.scss'],
  providers: [ModelFactoryService]
})
export class IdentityUpdaterComponent {

  name: string;
  title: string;
  religion: string

  constructor(private dialogRef: MdDialogRef<IdentityUpdaterComponent>) {
  }

  public onOk(): void {
    const dto = new IdentityDTO();
    dto.name = this.name;
    dto.title = this.title;
    dto.religion = this.religion;

    this.dialogRef.close(dto);
  }
}
