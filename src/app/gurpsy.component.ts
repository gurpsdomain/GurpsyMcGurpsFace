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
  public isDarkTheme: boolean = true;
  public isDutch: boolean = false;

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
    this.themeService.getTheme().then(theme => this.setTheme(theme)).catch(err => this.setTheme(ThemeService.THEME_DEFAULT));
    this.themeService.themeChange$.subscribe(theme => this.setTheme(theme));
  }

  initLanguage(): void {
    this.languageService.getLanguage().then(locale => this.isDutch = locale === LanguagesService.DUTCH);
    this.languageService.languageChange$.subscribe(locale => this.isDutch = locale === LanguagesService.DUTCH);
  }

  setTheme(theme: string) {
    this.isDarkTheme = theme === ThemeService.THEME_NIGHT;
  }

  onThemeChange(): void {
    this.isDarkTheme = !this.isDarkTheme;
    let theme: string = this.isDarkTheme ? ThemeService.THEME_NIGHT : ThemeService.THEME_DAY;
    this.themeService.setTheme(theme);
  }

  onDutchChange(): void {
    this.isDutch = !this.isDutch;
    this.languageService.setLanguage(this.isDutch ? LanguagesService.DUTCH : LanguagesService.ENGLISH);
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
