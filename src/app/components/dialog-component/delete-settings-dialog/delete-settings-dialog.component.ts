import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {StorageService} from '../../../services/storage-service/storage.service';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './delete-settings-dialog.component.html',
  styleUrls: ['./delete-settings-dialog.component.scss']
})
export class DeleteSettingsDialogComponent {

  public dialogRef: MdDialogRef<DeleteSettingsDialogComponent>;
  private storageService: StorageService;

  constructor(dialogRef: MdDialogRef<DeleteSettingsDialogComponent>, storage: StorageService) {
    this.dialogRef = dialogRef;
    this.storageService = storage;
  }

  onDeleteSettings(): void {
    this.storageService.clearStorage();
    this.dialogRef.close();
  }
}
