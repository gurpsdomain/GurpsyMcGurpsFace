import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {LanguagesService} from '../../../services/languages-service/languages.service';
import {StorageService} from '../../../services/storage-service/storage.service';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './delete-settings-dialog.component.html',
  providers: [
    LanguagesService
  ]
})
export class DeleteSettingsDialogComponent {

  public dialogRef: MdDialogRef<DeleteSettingsDialogComponent>;
  private languagesService: LanguagesService;
  private storageService: StorageService;

  constructor(dialogRef: MdDialogRef<DeleteSettingsDialogComponent>, languages: LanguagesService, storage: StorageService) {
    this.dialogRef = dialogRef;
    this.languagesService = languages;
    this.storageService = storage;
  }

  onDeleteSettings(): void {
    this.languagesService.clearSettings();
    this.storageService.clearStorage();
    this.dialogRef.close();
  }
}
