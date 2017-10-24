import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../../services/settings/settings.service';
import {Settings} from '../../../../models/settings/settings.model';
import {Unit} from '../../../../models/settings/enums/unit.enum';
import {TemplateRepository} from '../../../../repositories/template/template.repository';

@Component({
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['../../dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  public nightTheme = false;
  public imperialUnits = false;

  /**
   * Create a new SettingsDialog
   * @param {SettingsService} settingsService
   * @param {TemplateRepository} templateRepository
   */
  constructor(private settingsService: SettingsService,
              private templateRepository: TemplateRepository) {
  }

  public ngOnInit(): void {
    this.initUnit();
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

  public onMetricsChange(): void {
    this.imperialUnits = !this.imperialUnits;

    const metrics = this.imperialUnits ? SettingsService.METRICS_SI : SettingsService.METRICS_DEFAULT;
    this.setUnit(metrics)

    this.settingsService.setMetrics(metrics);
  }

  /**
   * Delete all stored settings.
   */
  public onDeleteSettings(): void {
    this.settingsService.clearStorage();
    this.templateRepository.clear();
  }

  private initUnit(): void {
    this.settingsService.getUnit()
      .then(unit => this.setUnit(unit))
      .catch(err => this.setUnit(SettingsService.METRICS_DEFAULT));
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
    this.setUnit(settings.unit);
    this.setTheme(settings.theme);
  }

  private setTheme(theme: string) {
    this.nightTheme = theme === SettingsService.THEME_NIGHT;
  }

  private setUnit(unit: Unit) {
    this.imperialUnits = unit === SettingsService.METRICS_SI;
  }
}
