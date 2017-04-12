import {Component} from '@angular/core';
import {MdDialogRef, MdCheckboxChange} from '@angular/material';
import {StorageService} from '../../../services/storage-service/storage.service';
import {Sheet} from '../../../models/sheet/sheet';

@Component({
  selector: 'gurpsy-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent {

  public storedSheets: Sheet[] = [];
  public clearSettings = true;

  private dialogRef: MdDialogRef<SettingsDialogComponent>;
  private storageService: StorageService;

  private sheetsToDelete: Sheet[] = [];

  constructor(dialogRef: MdDialogRef<SettingsDialogComponent>, storage: StorageService) {
    this.dialogRef = dialogRef;
    this.storageService = storage;

    this.initPreviouslyOpenedSheetList();
  }

  public onSheetSelected(sheet: Sheet, event: MdCheckboxChange): void {
    if (event.checked) {
      this.addToStoredSheets(sheet);
    } else {
      this.removeFromStoredSheets(sheet);
    }
  }

  public onDeleteSettings(): void {
    this.storageService.clearStorage(this.clearSettings, this.sheetsToDelete);
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

    for (const storedSheet of this.sheetsToDelete) {
      if (storedSheet.metaData.identity.name === sheet.metaData.identity.name) {
        add = false;
      }
    }

    if (add) {
      this.sheetsToDelete.push(sheet);
    }
  }

  private removeFromStoredSheets(sheet: Sheet): void {
    const newStoredSheets: Sheet[] = [];

    for (const storedSheet of this.sheetsToDelete) {
      if (storedSheet.metaData.identity.name !== sheet.metaData.identity.name) {
        newStoredSheets.push(storedSheet);
      }
    }

    this.sheetsToDelete = newStoredSheets;
  }
}
