import {Component} from '@angular/core';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {SettingsService} from '../../../../services/settings/settings.service';

@Component({
  templateUrl: './about-dialog.component.html',
  styleUrls: ['./about-dialog.component.scss']
})
export class AboutDialogComponent {

  /**
   * Create a new SettingsDialog
   * @param {SettingsService} settingsService
   * @param {TemplateRepository} templateRepository
   */
  constructor(private settingsService: SettingsService,
              private templateRepository: TemplateRepository) {
  }

  /**
   * Delete all stored settings.
   */
  public onDeleteSettings(): void {
    this.settingsService.clearStorage();
    this.templateRepository.clear();
  }
}
