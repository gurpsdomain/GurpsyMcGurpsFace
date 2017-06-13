import {Component, OnInit, ViewChild} from '@angular/core';
import {MdCheckboxChange} from '@angular/material';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {BooksConfigurationComponent} from '../../generic/books-configuration/books-configuration.component';
import {InputSheet} from '../../../models/sheet/input/input.sheet.model';

@Component({
  selector: 'gurpsy-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: [
    '../dialog.component.scss',
    './settings-dialog.component.scss'
  ]
})
export class SettingsDialogComponent implements OnInit {

  public nightTheme = false;
  public serverUrl: string;

  @ViewChild(BooksConfigurationComponent)
  private bookConfigurationChild: BooksConfigurationComponent;

  constructor(private settingsService: SettingsService) {
  }

  public ngOnInit(): void {
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

  private initServerUrl(): void {
    this.settingsService.getServerUrl()
      .then(serverUrl => this.serverUrl = serverUrl)
      .catch(err => this.setServerUrl(''));
    this.settingsService.getSettingsObserver().subscribe(config => this.setServerUrl(config.serverUrl));
  }

  private initTheme(): void {
    this.settingsService.getTheme()
      .then(theme => this.setTheme(theme))
      .catch(err => this.setTheme(SettingsService.THEME_DEFAULT));
    this.settingsService.getSettingsObserver().subscribe(config => this.setTheme(config.theme));
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
