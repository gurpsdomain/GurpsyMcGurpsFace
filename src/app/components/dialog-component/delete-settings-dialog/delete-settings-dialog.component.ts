import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {StorageService} from '../../../services/storage-service/storage.service';
import {JsonSheet} from '../../../model/json/sheet';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './delete-settings-dialog.component.html',
  styleUrls: ['./delete-settings-dialog.component.scss']
})
export class DeleteSettingsDialogComponent {

  public storedSheets: JsonSheet[] = [];
  public clearTheme = true;
  public clearLanguage = true;

  private dialogRef: MdDialogRef<DeleteSettingsDialogComponent>;
  private storageService: StorageService;


  constructor(dialogRef: MdDialogRef<DeleteSettingsDialogComponent>, storage: StorageService) {
    this.dialogRef = dialogRef;
    this.storageService = storage;

    this.initPreviouslyOpenedSheetList();
  }

  onDeleteSettings(): void {
    this.storageService.clearStorage(this.clearLanguage, this.clearTheme);
    this.dialogRef.close();
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getSheets().then(
      sheets => this.setStoredSheets(sheets));
  }

  private setStoredSheets(sheets: JsonSheet[]): void {
    this.storedSheets = sheets;
  }
}
