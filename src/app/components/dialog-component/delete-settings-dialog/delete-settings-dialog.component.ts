import {Component} from '@angular/core';
import {MdDialogRef, MdCheckboxChange} from '@angular/material';
import {StorageService} from '../../../services/storage-service/storage.service';
import {Sheet} from '../../../model/sheet';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './delete-settings-dialog.component.html',
  styleUrls: ['./delete-settings-dialog.component.scss']
})
export class DeleteSettingsDialogComponent {

  public storedSheets: Sheet[] = [];
  public clearTheme = true;
  public clearLanguage = true;

  private dialogRef: MdDialogRef<DeleteSettingsDialogComponent>;
  private storageService: StorageService;

  private sheetsToDelete: Sheet[] = [];


  constructor(dialogRef: MdDialogRef<DeleteSettingsDialogComponent>, storage: StorageService) {
    this.dialogRef = dialogRef;
    this.storageService = storage;

    this.initPreviouslyOpenedSheetList();
  }

  onSheetSelected(sheet: Sheet, event: MdCheckboxChange): void {
    if (event.checked) {
      this.addToStoredSheets(sheet);
    } else {
      this.removeFromStoredSheets(sheet);
    }
  }

  onDeleteSettings(): void {
    this.storageService.clearStorage(this.clearLanguage, this.clearTheme, this.sheetsToDelete);
    this.dialogRef.close();
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setStoredSheets(sheets));
  }

  private setStoredSheets(sheets: Sheet[]): void {
    this.storedSheets = sheets;
  }

  private addToStoredSheets(sheet: Sheet): void {
    let add = true;

    for (let storedSheet of this.sheetsToDelete) {
      if (storedSheet.metaData.identity.name === sheet.metaData.identity.name) {
        add = false;
      }
    }

    if (add) {
      this.sheetsToDelete.push(sheet);
    }
  }

  private removeFromStoredSheets(sheet: Sheet): void {
    let newStoredSheets: Sheet[] = [];

    for (let storedSheet of this.sheetsToDelete) {
      if (storedSheet.metaData.identity.name !== sheet.metaData.identity.name) {
        newStoredSheets.push(storedSheet);
      }
    }

    this.sheetsToDelete = newStoredSheets;
  }
}
