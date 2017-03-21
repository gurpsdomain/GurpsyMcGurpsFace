import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import {DeleteSettingsDialogComponent} from './components/dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {OpenSheetDialogComponent} from './components/dialog-component/open-sheet-dialog/open-sheet-dialog.component';
import {ConfigService} from './services/config-service/config.service';
import {LanguagesService} from './services/languages-service/languages.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {TranslateService} from 'ng2-translate';
import {Sheet} from './model/sheet';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.scss']
})
export class GurpsyComponent implements OnInit {

  private static DIALOG_WIDTH = '400px';
  private static SNACKBAR_DURATION_TIME = 4000;

  private languageService: LanguagesService;
  private configService: ConfigService;
  private modelReadService: ModelReadService;
  private snackBar: MdSnackBar;
  private translate: TranslateService;

  private openSheetDialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private deleteSettingsDialogRef: MdDialogRef<DeleteSettingsDialogComponent>;

  public dialog: MdDialog;
  public theme: string;

  constructor(theme: ConfigService, languageService: LanguagesService, dialog: MdDialog, modelReadService: ModelReadService,
              snackBar: MdSnackBar, translate: TranslateService) {
    this.languageService = languageService;
    this.configService = theme;
    this.dialog = dialog;
    this.modelReadService = modelReadService;
    this.snackBar = snackBar;
    this.translate = translate;
  }

  ngOnInit(): void {
    this.initTheme();
    this.initSheetChangeListener();
  }

  public onThemeChange(): void {
    const theme = this.theme === ConfigService.THEME_NIGHT ? ConfigService.THEME_DAY :
      ConfigService.THEME_NIGHT;
    this.setTheme(theme);
    this.configService.setTheme(theme);
  }

  public onOpenSheetDialog(): void {
    this.openSheetDialogRef = this.dialog.open(OpenSheetDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.openSheetDialogRef.afterClosed().subscribe(
      this.openSheetDialogRef = null
    );
  }

  public onOpenDeleteSettingsDialog(): void {
    this.deleteSettingsDialogRef = this.dialog.open(DeleteSettingsDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.deleteSettingsDialogRef.afterClosed().subscribe(
      this.deleteSettingsDialogRef = null
    );
  }

  private initTheme(): void {
    this.configService.getTheme().then(theme => this.setTheme(theme)).catch(err => this.setTheme(ConfigService.THEME_DEFAULT));
    this.configService.getConfigObserver().subscribe(config => this.setTheme(config.theme));
  }

  private initSheetChangeListener(): void {
    this.modelReadService.modelChange$.subscribe(sheet => this.showNewSheetLoadedMessage(sheet));
  }

  private setTheme(theme: string) {
    if (theme === ConfigService.THEME_NIGHT || theme === ConfigService.THEME_DAY) {
      this.theme = theme;
    } else {
      this.theme = ConfigService.THEME_DEFAULT;
      console.log('WARNING - Invalid theme stored in Local Storage: ', theme);
    }
  }

  private showNewSheetLoadedMessage(sheet: Sheet): void {
    this.translate.get('MESSAGE.SHEET_LOADED', {value: sheet.metaData.identity.name}).subscribe((res: string) => {
      this.snackBar.open(res, '', {
        duration: GurpsyComponent.SNACKBAR_DURATION_TIME,
      });
    });
  }
}
