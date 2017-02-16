import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {StorageService} from '../../../services/storage-service/storage.service';
import {SheetMapEntry} from '../../../model/json/sheetmap';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './delete-settings-dialog.component.html',
  styleUrls: ['./delete-settings-dialog.component.scss']
})
export class DeleteSettingsDialogComponent {

  public storedSheets: SheetMapEntry[] = [];
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
    this.storageService.getAllStoredSheets().then(
      sheetMap => this.storedSheets = sheetMap.sheets);
  }
}
