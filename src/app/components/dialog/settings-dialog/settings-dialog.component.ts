import {Component, OnInit, ViewChild} from '@angular/core';
import {MdDialogRef, MdCheckboxChange} from '@angular/material';
import {StorageService} from '../../../services/back-end/storage/storage.service';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {BooksConfigurationComponent} from '../../generic/books-configuration/books-configuration.component';
import {InputSheet} from '../../../models/sheet/input';

@Component({
  selector: 'gurpsy-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: [
    '../dialog.component.scss',
    './settings-dialog.component.scss'
  ]
})
export class SettingsDialogComponent implements OnInit {

  public storedSheets: InputSheet[] = [];
  public clearSettings = true;
  public nightTheme = false;
  public serverUrl: string;

  private dialogRef: MdDialogRef<SettingsDialogComponent>;
  private settingsService: SettingsService;
  private storageService: StorageService;
  private sheetsToDelete: InputSheet[] = [];

  @ViewChild(BooksConfigurationComponent)
  private bookConfigurationChild: BooksConfigurationComponent;

  constructor(dialogRef: MdDialogRef<SettingsDialogComponent>, configService: SettingsService, storage: StorageService) {
    this.dialogRef = dialogRef;
    this.settingsService = configService;
    this.storageService = storage;
  }

  public ngOnInit(): void {
    this.initPreviouslyOpenedSheetList();
    this.initServerUrl();
    this.initTheme();
  }

  /**
   * Handle a Change of the serverUrl
   *
   * @param serverUrl
   */
  public onServerUrlChange(serverUrl: string): void {
    this.settingsService.setServerUrl(serverUrl);
  }

  /**
   * Handle a Change of the selected theme
   */
  public onThemeChange(): void {
    const theme = this.nightTheme ? SettingsService.THEME_NIGHT : SettingsService.THEME_DAY;
    this.setTheme(theme);
    this.settingsService.setTheme(theme);
  }

  /**
   * Handle a sheet selection
   *
   * @param sheet The sheet to be selected
   * @param event The event that was triggered
   */
  public onSheetSelected(sheet: InputSheet, event: MdCheckboxChange): void {
    if (event.checked) {
      this.addToStoredSheets(sheet);
    } else {
      this.removeFromStoredSheets(sheet);
    }
  }

  public onDeleteSettings(): void {
    this.storageService.clearStorage(this.clearSettings, this.sheetsToDelete);
  }

  public onKillSettings(): void {
    this.storageService.kill();
  }

  public onPersistSettings(): void {
    this.bookConfigurationChild.storeBookConfigurations();
    this.dialogRef.close();
  }

  private initPreviouslyOpenedSheetList(): void {
    this.storageService.getPreviouslyOpenedSheets().then(
      sheets => this.setStoredSheets(sheets));
  }

  private setStoredSheets(sheets: InputSheet[]): void {
    this.storedSheets = sheets;
  }

  private addToStoredSheets(sheet: InputSheet): void {
    let add = true;

    for (const storedSheet of this.sheetsToDelete) {
      if (storedSheet.name === sheet.name) {
        add = false;
      }
    }

    if (add) {
      this.sheetsToDelete.push(sheet);
    }
  }

  private removeFromStoredSheets(sheet: InputSheet): void {
    const newStoredSheets: InputSheet[] = [];

    for (const storedSheet of this.sheetsToDelete) {
      if (storedSheet.name !== sheet.name) {
        newStoredSheets.push(storedSheet);
      }
    }

    this.sheetsToDelete = newStoredSheets;
  }

  private initServerUrl(): void {
    this.settingsService.getServerUrl()
      .then(serverUrl => this.serverUrl = serverUrl)
      .catch(err => this.setServerUrl(''));
    this.settingsService.getConfigObserver().subscribe(config => this.setServerUrl(config.serverUrl));
  }

  private initTheme(): void {
    this.settingsService.getTheme()
      .then(theme => this.setTheme(theme))
      .catch(err => this.setTheme(SettingsService.THEME_DEFAULT));
    this.settingsService.getConfigObserver().subscribe(config => this.setTheme(config.theme));
  }

  private setServerUrl(url: string) {
    if (url !== null) {
      this.serverUrl = url
    }
  }

  private setTheme(theme: string) {
    this.nightTheme = theme === SettingsService.THEME_NIGHT;
  }
}
