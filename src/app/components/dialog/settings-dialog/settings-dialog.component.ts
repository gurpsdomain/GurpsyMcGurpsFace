import {Component, OnInit} from '@angular/core';
import {MdDialogRef, MdCheckboxChange} from '@angular/material';
import {StorageService} from '../../../services/storage-service/storage.service';
import {Sheet} from '../../../models/sheet/sheet';
import {ConfigService} from '../../../services/config-service/config.service';

@Component({
  selector: 'gurpsy-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {


  public storedSheets: Sheet[] = [];
  public clearSettings = true;
  public serverUrl: string;

  private dialogRef: MdDialogRef<SettingsDialogComponent>;
  private configService: ConfigService;
  private storageService: StorageService;
  private sheetsToDelete: Sheet[] = [];

  constructor(dialogRef: MdDialogRef<SettingsDialogComponent>, configService: ConfigService, storage: StorageService) {
    this.dialogRef = dialogRef;
    this.configService = configService;
    this.storageService = storage;

    this.initPreviouslyOpenedSheetList();
  }

  public ngOnInit(): void {
    this.configService.getServerUrl().then(serverUrl => this.serverUrl = serverUrl);
    this.configService.getConfigObserver().subscribe(config => this.serverUrl = config.serverUrl);
  }

  public onServerUrlChange(serverUrl: string): void {
    this.configService.setServerUrl(serverUrl);
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
  }

  public onPersistSettings(): void {
    this.dialogRef.close();
    console.log('Persist all settings');
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
