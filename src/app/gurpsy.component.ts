import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {DeleteSettingsDialogComponent} from './components/dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {OpenSheetDialogComponent} from './components/dialog-component/open-sheet-dialog/open-sheet-dialog.component';
import {ThemeService} from './services/theme-service/theme.service';
import {LanguagesService} from './services/languages-service/languages.service';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.scss']
})
export class GurpsyComponent implements OnInit {

  private themeService: ThemeService;
  private languageService: LanguagesService;

  private openSheetDialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private deleteSettingsDialogRef: MdDialogRef<DeleteSettingsDialogComponent>;

  public dialog: MdDialog;
  public isDarkTheme = true;
  public isDutch = false;

  constructor(theme: ThemeService, language: LanguagesService, dialog: MdDialog) {
    this.themeService = theme;
    this.languageService = language;
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.initTheme();
    this.initLanguage();
  }

  initTheme(): void {
    this.themeService.getTheme().then(theme => this.setTheme(theme)).catch(err => this.setTheme(ThemeService.DEFAULT));
    this.themeService.getThemeObserver().subscribe(theme => this.setTheme(theme));
  }

  initLanguage(): void {
    this.languageService.getLanguage().then(locale => this.setLanguage(locale)).catch(err => this.setLanguage(LanguagesService.DEFAULT));
    this.languageService.languageChange$.subscribe(locale => this.setLanguage(locale));
  }

  setTheme(theme: string) {
    this.isDarkTheme = theme === ThemeService.THEME_NIGHT;
  }

  private setLanguage(locale: string) {
    this.isDutch = locale === LanguagesService.DUTCH;
  }

  onThemeChange(): void {
    this.isDarkTheme = !this.isDarkTheme;
    let theme: string = this.isDarkTheme ? ThemeService.THEME_NIGHT : ThemeService.THEME_DAY;
    this.themeService.setTheme(theme);
  }

  onLanguageChange(): void {
    this.isDutch = !this.isDutch;
    let language = this.isDutch ? LanguagesService.DUTCH : LanguagesService.ENGLISH;
    this.languageService.setLanguage(language);
  }

  onOpenSheetDialog(): void {
    this.openSheetDialogRef = this.dialog.open(OpenSheetDialogComponent, {
      width: '400px',
      height: '400px',
      disableClose: false
    });

    this.openSheetDialogRef.afterClosed().subscribe(
      this.openSheetDialogRef = null
    );
  }

  onOpenDeleteSettingsDialog(): void {
    this.deleteSettingsDialogRef = this.dialog.open(DeleteSettingsDialogComponent, {
      width: '400px',
      height: '400px',
      disableClose: false
    });

    this.deleteSettingsDialogRef.afterClosed().subscribe(
      this.deleteSettingsDialogRef = null
    );
  }
}
