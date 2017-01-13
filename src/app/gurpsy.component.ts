import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {LanguagesService} from './services/languages-service/languages.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {DeleteSettingsDialogComponent} from './components/dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {OpenSheetDialogComponent} from './components/dialog-component/open-sheet-dialog/open-sheet-dialog.component';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.css'],
  providers: [LanguagesService]
})
export class GurpsyComponent implements OnInit {

  private translateService: TranslateService;
  private languagesService: LanguagesService;

  private openSheetDialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private deleteSettingsDialogRef: MdDialogRef<DeleteSettingsDialogComponent>;

  public dialog: MdDialog;
  public isDarkTheme: boolean = false;

  constructor(translate: TranslateService, languages: LanguagesService, dialog: MdDialog) {
    this.translateService = translate;
    this.languagesService = languages;
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.initLanguages();
  }

  initLanguages(): void {
    this.languagesService.getAvailableLanguagesLocales().then(
      availableLanguages => this.translateService.addLangs(availableLanguages));
    this.languagesService.getDefaultLocale().then(
      defaultLocale => this.translateService.setDefaultLang(defaultLocale));
    this.languagesService.getCurrentLocale().then(
      currentlocale => this.translateService.use(currentlocale));
  }

  onOpenSheetDialog(): void {
    this.openSheetDialogRef = this.dialog.open(OpenSheetDialogComponent, {
      disableClose: false
    });

    this.openSheetDialogRef.afterClosed().subscribe(
      this.openSheetDialogRef = null
    );
  }

  onOpenDeleteSettingsDialog(): void {
    this.deleteSettingsDialogRef = this.dialog.open(DeleteSettingsDialogComponent, {
      disableClose: false
    });

    this.deleteSettingsDialogRef.afterClosed().subscribe(
      this.deleteSettingsDialogRef = null
    );
  }
}
