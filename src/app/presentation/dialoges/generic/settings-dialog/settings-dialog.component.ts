import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../../services/settings/settings.service';
import {Settings} from '../../../../models/settings/settings.model';
import {TemplateRepository} from '../../../../repositories/template/template.repository';

@Component({
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['../../dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  public nightTheme = false;

  /**
   * Create a new SettingsDialog
   * @param {SettingsService} settingsService
   * @param {TemplateRepository} templateRepository
   */
  constructor(private settingsService: SettingsService,
              private templateRepository: TemplateRepository) {
  }

  public ngOnInit(): void {
    this.initTheme();
    this.initSettingsListener();
  }

  /**
   * Handle a change of the selected theme
   */
  public onThemeChange(): void {
    this.nightTheme = !this.nightTheme;

    const theme = this.nightTheme ? SettingsService.THEME_NIGHT : SettingsService.THEME_DAY;
    this.setTheme(theme);

    this.settingsService.setTheme(theme);
  }

  /**
   * Delete all stored settings.
   */
  public onDeleteSettings(): void {
    this.settingsService.clearStorage();
    this.templateRepository.clear();
  }

  private initTheme(): void {
    this.settingsService.getTheme()
      .then(theme => this.setTheme(theme))
      .catch(err => this.setTheme(SettingsService.THEME_DEFAULT));
  }

  private initSettingsListener(): void {
    this.settingsService.settingsChange$.subscribe(settings => this.updateSettings(settings));
  }

  private updateSettings(settings: Settings): void {
    this.setTheme(settings.theme);
  }

  private setTheme(theme: string) {
    this.nightTheme = theme === SettingsService.THEME_NIGHT;
  }
}
