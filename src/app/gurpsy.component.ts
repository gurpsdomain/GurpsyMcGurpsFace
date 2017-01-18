import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {LanguagesService} from './services/languages-service/languages.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {DeleteSettingsDialogComponent} from './components/dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {OpenSheetDialogComponent} from './components/dialog-component/open-sheet-dialog/open-sheet-dialog.component';
import {ThemeService} from './services/theme-service/theme.service';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.scss']
})
export class GurpsyComponent implements OnInit {

  private translateService: TranslateService;
  private languagesService: LanguagesService;
  private themeService: ThemeService;

  private openSheetDialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private deleteSettingsDialogRef: MdDialogRef<DeleteSettingsDialogComponent>;

  public dialog: MdDialog;
  public isDarkTheme: boolean = true;

  constructor(translate: TranslateService, theme: ThemeService, languages: LanguagesService, dialog: MdDialog) {
    this.translateService = translate;
    this.themeService = theme;
    this.languagesService = languages;
    this.dialog = dialog;
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
    this.themeService.getTheme().then(theme => this.setTheme(theme)).catch(err => this.setTheme(ThemeService.THEME_DEFAULT));
    this.themeService.themeChange$.subscribe(theme => this.setTheme(theme));
  }

  setTheme(theme: string) {
    this.isDarkTheme = theme === ThemeService.THEME_NIGHT;
  }

  onThemeChange(): void {
    this.isDarkTheme = !this.isDarkTheme;
    let theme: string = this.isDarkTheme ? ThemeService.THEME_NIGHT : ThemeService.THEME_DAY;
    this.themeService.setTheme(theme);
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
