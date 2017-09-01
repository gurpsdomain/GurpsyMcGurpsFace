import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {Settings} from '../../../../models/settings/settings.model';

@Component({
  templateUrl: 'settings-dialog.component.html',
  styleUrls: ['../../dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  public nightTheme = false;
  public siMetrics = false;

  constructor(private settingsService: SettingsService) {
  }

  public ngOnInit(): void {
    this.initMetrics();
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
    this.siMetrics = !this.siMetrics;

    const metrics = this.siMetrics ? SettingsService.METRICS_SI : SettingsService.METRICS_DEFAULT;
    this.setMetrics(metrics)

    this.settingsService.setMetrics(metrics);
  }

  /**
   * Delete all stored settings.
   */
  public onDeleteSettings(): void {
    this.settingsService.clearStorage();
  }

  private initMetrics(): void {
    this.settingsService.getMetrics()
      .then(metrics => this.setMetrics(metrics))
      .catch(err => this.setMetrics(SettingsService.METRICS_DEFAULT));
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
    this.setMetrics(settings.metrics);
    this.setTheme(settings.theme);
  }

  private setTheme(theme: string) {
    this.nightTheme = theme === SettingsService.THEME_NIGHT;
  }

  private setMetrics(metrics: string) {
    this.siMetrics = metrics === SettingsService.METRICS_SI;
  }
}
