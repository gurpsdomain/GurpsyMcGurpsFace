import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {LanguagesService} from '../../../services/languages-service/languages.service';
import {ThemesService} from '../../../services/themes-service/themes.service';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './delete-settings-dialog.component.html',
  providers: [LanguagesService, ThemesService]
})
export class DeleteSettingsDialogComponent {

  public dialogRef: MdDialogRef<DeleteSettingsDialogComponent>;
  private languagesService: LanguagesService;
  private themesService: ThemesService;

  constructor(dialogRef: MdDialogRef<DeleteSettingsDialogComponent>, languages: LanguagesService, themes: ThemesService) {
    this.dialogRef = dialogRef;
    this.languagesService = languages;
    this.themesService = themes;
  }

  onDeleteSettings(): void {
    this.languagesService.clearSettings();
    this.themesService.clearSettings();
    this.dialogRef.close();
  }
}
