import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {LanguagesService} from './services/languages-service/languages.service';
import {StorageService} from './services/storage-service/storage.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {DeleteSettingsDialogComponent} from './components/dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {OpenSheetDialogComponent} from './components/dialog-component/open-sheet-dialog/open-sheet-dialog.component';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.scss'],
  providers: [
    LanguagesService,
    StorageService]
})
export class GurpsyComponent implements OnInit {

  private translateService: TranslateService;
  private languagesService: LanguagesService;
  private storageService: StorageService;

  private openSheetDialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private deleteSettingsDialogRef: MdDialogRef<DeleteSettingsDialogComponent>;

  public dialog: MdDialog;
  public isDarkTheme: boolean = true;

  constructor(translate: TranslateService, storage: StorageService, languages: LanguagesService, dialog: MdDialog) {
    this.translateService = translate;
    this.storageService = storage;
    this.languagesService = languages;
    this.dialog = dialog;

    this.storageService.themeChange$.subscribe(theme => this.setTheme(theme));
  }

  ngOnInit(): void {
    this.initLanguages();
    this.initTheme();
  }

  initLanguages(): void {
    this.languagesService.getAvailableLanguagesLocales().then(
      availableLanguages => this.translateService.addLangs(availableLanguages));
    this.languagesService.getDefaultLocale().then(
      defaultLocale => this.translateService.setDefaultLang(defaultLocale));
    this.languagesService.getCurrentLocale().then(
      currentlocale => this.translateService.use(currentlocale));
  }

  initTheme(): void {
    this.storageService.getTheme().then(
      theme => this.isDarkTheme = theme === 'night');
  }

  setTheme(theme: string) {
    this.isDarkTheme = theme === 'night';
  }

  onThemeChange(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.storageService.setTheme(this.isDarkTheme);
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
