import {Component, OnInit, ViewChild} from '@angular/core';
import {MdCheckboxChange} from '@angular/material';
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

  public clearSettings = true;
  public nightTheme = false;
  public serverUrl: string;
  public storedSheets: InputSheet[] = [];

  private sheetsToDelete: InputSheet[] = [];

  @ViewChild(BooksConfigurationComponent)
  private bookConfigurationChild: BooksConfigurationComponent;

  constructor(private settingsService: SettingsService) {
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
   * Handle a change of the selected theme
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

  /**
   * Handle the situation where a BookConfiguration changes.
   */
  public onChangeBooksConfiguration(): void {
    this.settingsService.storeBookConfigurations(this.bookConfigurationChild.bookConfigurations);
  }

  /**
   * Delete all stored settings.
   */
  public onDeleteSettings(): void {
    this.settingsService.kill();
  }

  private initPreviouslyOpenedSheetList(): void {
    this.settingsService.getPreviouslyOpenedSheets().then(
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
