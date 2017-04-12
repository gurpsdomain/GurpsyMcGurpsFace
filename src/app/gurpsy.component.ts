import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar, MdIconRegistry} from '@angular/material';
import {OpenSheetDialogComponent} from './components/dialog/open-sheet-dialog/open-sheet-dialog.component';
import {ConfigService} from './services/config-service/config.service';
import {LanguagesService} from './services/languages-service/languages.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {TranslateService} from 'ng2-translate';
import {Sheet} from './models/sheet/sheet';
import {AboutDialogComponent} from './components/dialog/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './components/dialog/dice-dialog/dice-dialog.component';
import {LoggingService} from './services/logging-service/logging.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SettingsDialogComponent} from './components/dialog/settings-dialog/settings-dialog.component';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.scss']
})
export class GurpsyComponent implements OnInit {

  private static DIALOG_WIDTH = '400px';
  private static SNACKBAR_DURATION_TIME = 4000;

  private languageService: LanguagesService;
  private loggingService: LoggingService;
  private configService: ConfigService;
  private modelReadService: ModelReadService;
  private snackBar: MdSnackBar;
  private translate: TranslateService;

  private aboutDialogRef: MdDialogRef<AboutDialogComponent>;
  private diceDialogRef: MdDialogRef<DiceDialogComponent>;
  private openSheetDialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private deleteSettingsDialogRef: MdDialogRef<SettingsDialogComponent>;

  public dialog: MdDialog;
  public theme: string;
  public night: string;

  constructor(theme: ConfigService, languageService: LanguagesService, loggingService: LoggingService,
              dialog: MdDialog, modelReadService: ModelReadService, snackBar: MdSnackBar,
              translate: TranslateService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    this.languageService = languageService;
    this.loggingService = loggingService;
    this.configService = theme;
    this.dialog = dialog;
    this.modelReadService = modelReadService;
    this.snackBar = snackBar;
    this.translate = translate;

    iconRegistry.addSvgIcon(
      'd6',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dice-6.svg'));
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

  public onOpenThrowDiceDialog(): void {
    this.diceDialogRef = this.dialog.open(DiceDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.diceDialogRef.afterClosed().subscribe(
      this.diceDialogRef = null
    );
  }

  public onOpenAboutDialog(): void {
    this.aboutDialogRef = this.dialog.open(AboutDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.aboutDialogRef.afterClosed().subscribe(
      this.aboutDialogRef = null
    );
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
    this.deleteSettingsDialogRef = this.dialog.open(SettingsDialogComponent, {
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

    this.configService.getNightTheme().then(night => this.night = night);
  }

  private initSheetChangeListener(): void {
    this.modelReadService.modelChange$.subscribe(sheet => this.showNewSheetLoadedMessage(sheet));
  }

  private setTheme(theme: string) {
    if (theme === ConfigService.THEME_NIGHT || theme === ConfigService.THEME_DAY) {
      this.theme = theme;
    } else {
      this.theme = ConfigService.THEME_DEFAULT;
      this.loggingService.warn('Invalid theme stored in Local Storage: ' + theme);
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
