import {Component, OnInit, ViewChild} from '@angular/core';
import {MdDialogRef, MdCheckboxChange} from '@angular/material';
import {StorageService} from '../../../services/storage-service/storage.service';
import {OutputSheet} from '../../../models/sheet/output';
import {ConfigService} from '../../../services/config-service/config.service';
import {BooksConfigurationComponent} from '../../generic/books-configuration/books-configuration.component';

@Component({
  selector: 'gurpsy-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: [
    '../dialog.component.scss',
    './settings-dialog.component.scss'
  ]
})
export class SettingsDialogComponent implements OnInit {

  public storedSheets: OutputSheet[] = [];
  public clearSettings = true;
  public nightTheme = false;
  public serverUrl: string;

  private dialogRef: MdDialogRef<SettingsDialogComponent>;
  private configService: ConfigService;
  private storageService: StorageService;
  private sheetsToDelete: OutputSheet[] = [];

  @ViewChild(BooksConfigurationComponent)
  private bookConfigurationChild: BooksConfigurationComponent;

  constructor(dialogRef: MdDialogRef<SettingsDialogComponent>, configService: ConfigService, storage: StorageService) {
    this.dialogRef = dialogRef;
    this.configService = configService;
    this.storageService = storage;

    this.initPreviouslyOpenedSheetList();
  }

  public ngOnInit(): void {
    this.configService.getServerUrl().then(serverUrl => this.serverUrl = serverUrl);
    this.configService.getConfigObserver().subscribe(config => this.serverUrl = config.serverUrl);

    this.initTheme();
  }

  public onServerUrlChange(serverUrl: string): void {
    this.configService.setServerUrl(serverUrl);
  }

  public onThemeChange(): void {
    const theme = this.nightTheme ? ConfigService.THEME_NIGHT : ConfigService.THEME_DAY;
    this.setTheme(theme);
    this.configService.setTheme(theme);
  }

  public onSheetSelected(sheet: OutputSheet, event: MdCheckboxChange): void {
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
    this.bookConfigurationChild.storeBookConfigurations();
    this.dialogRef.close();

    console.log('Persist all settings');
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setStoredSheets(sheets));
  }

  private setStoredSheets(sheets: OutputSheet[]): void {
    this.storedSheets = sheets;
  }

  private addToStoredSheets(sheet: OutputSheet): void {
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

  private removeFromStoredSheets(sheet: OutputSheet): void {
    const newStoredSheets: OutputSheet[] = [];

    for (const storedSheet of this.sheetsToDelete) {
      if (storedSheet.metaData.identity.name !== sheet.metaData.identity.name) {
        newStoredSheets.push(storedSheet);
      }
    }

    this.sheetsToDelete = newStoredSheets;
  }

  private initTheme(): void {
    this.configService.getTheme().then(theme => this.setTheme(theme)).catch(err => this.setTheme(ConfigService.THEME_DEFAULT));
    this.configService.getConfigObserver().subscribe(config => this.setTheme(config.theme));
  }

  private setTheme(theme: string) {
    if (theme === ConfigService.THEME_NIGHT) {
      this.nightTheme = true;
    } else {
      this.nightTheme = false;
    }
  }
}
