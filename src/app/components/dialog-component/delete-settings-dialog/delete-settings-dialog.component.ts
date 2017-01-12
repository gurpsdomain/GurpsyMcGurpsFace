import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {LanguagesService} from '../../../services/languages-service/languages.service';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './delete-settings-dialog.component.html',
  providers: [LanguagesService]
})
export class DeleteSettingsDialogComponent {

  public dialogRef: MdDialogRef<DeleteSettingsDialogComponent>;
  private languagesService: LanguagesService;

  constructor(dialogRef: MdDialogRef<DeleteSettingsDialogComponent>, languages: LanguagesService) {
    this.dialogRef = dialogRef;
    this.languagesService = languages;
  }

  onDeleteSettings(): void {
    this.languagesService.clearSettings();
    this.dialogRef.close();
  }
}
