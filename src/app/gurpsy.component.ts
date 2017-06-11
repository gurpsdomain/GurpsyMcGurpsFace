import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar, MdIconRegistry, OverlayContainer} from '@angular/material';
import {OpenSheetDialogComponent} from './components/dialog/open-sheet-dialog/open-sheet-dialog.component';
import {SettingsService} from './services/front-end/settings/settings.service';
import {ModelService} from './services/front-end/model/model.service';
import {AboutDialogComponent} from './components/dialog/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './components/dialog/dice-dialog/dice-dialog.component';
import {LoggingService} from './services/back-end/logging/logging.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SettingsDialogComponent} from './components/dialog/settings-dialog/settings-dialog.component';
import {TranslateService} from '@ngx-translate/core';
import {PageReferenceService} from './services/front-end/page-reference/page-reference.service';
import {OutputSheet} from './models/sheet/output/output.sheet.model';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.scss']
})
export class GurpsyComponent implements OnInit {

  private static DIALOG_WIDTH = '400px';
  private static SNACKBAR_DURATION_TIME = 4000;

  private static ICON_D6_NAME = 'd6';
  private static ICON_D6_URL = 'assets/icons/dice-6.svg';
  private static ICON_LOGO_NAME = 'gurpsy-face';
  private static ICON_LOGO_URL = 'assets/icons/gurpsy-face.svg';
  private static ICON_LIBRARY_NAME = 'books';
  private static ICON_LIBRARY_URL = 'assets/icons/book-open-page-variant.svg';

  private aboutDialogRef: MdDialogRef<AboutDialogComponent>;
  private diceDialogRef: MdDialogRef<DiceDialogComponent>;
  private openSheetDialogRef: MdDialogRef<OpenSheetDialogComponent>;
  private settingsDialogRef: MdDialogRef<SettingsDialogComponent>;

  public theme: string;
  public showLibrary: boolean;

  constructor(public dialog: MdDialog,
              private settingsService: SettingsService,
              private loggingService: LoggingService,
              private modelService: ModelService,
              private pageReferenceService: PageReferenceService,
              private snackBar: MdSnackBar,
              private translate: TranslateService,
              private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private overlayContainer: OverlayContainer) {

    this.registerCustomIcons(iconRegistry, sanitizer);
  }

  public ngOnInit(): void {
    this.initLibrary();
    this.initSheetChangeListener();
    this.initTheme();
  }

  /**
   * Call when the TrowDice dialog should shown.
   */
  public onOpenThrowDiceDialog(): void {
    this.diceDialogRef = this.dialog.open(DiceDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.diceDialogRef.afterClosed().subscribe(
      this.diceDialogRef = null
    );
  }

  /**
   * Call when the AboutDialog should be shown.
   */
  public onOpenAboutDialog(): void {
    this.aboutDialogRef = this.dialog.open(AboutDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.aboutDialogRef.afterClosed().subscribe(
      this.aboutDialogRef = null
    );
  }

  /**
   * Call when the OpenSheet dialog should be shown.
   */
  public onOpenSheetDialog(): void {
    this.openSheetDialogRef = this.dialog.open(OpenSheetDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.openSheetDialogRef.afterClosed().subscribe(
      this.openSheetDialogRef = null
    );
  }

  /**
   * Call when the SettingsDialog should be shown.
   */
  public onOpenSettingsDialog(): void {
    this.settingsDialogRef = this.dialog.open(SettingsDialogComponent, {
      width: GurpsyComponent.DIALOG_WIDTH,
      disableClose: false
    });

    this.settingsDialogRef.afterClosed().subscribe(
      this.settingsDialogRef = null
    );
  }

  /**
   * Call when the library should be shown.
   *
   * @param {boolean} show
   */
  public onShowLibrary(show: boolean): void {
    this.showLibrary = show;
  }

  private initLibrary(): void {
    this.pageReferenceService.getReferenceChange().subscribe(reference => this.showLibrary = true);
    this.showLibrary = false;
  }

  private initTheme(): void {
    this.settingsService.getTheme()
      .then(theme => this.setTheme(theme))
      .catch(err => this.setTheme(SettingsService.THEME_DEFAULT));
    this.settingsService.getSettingsObserver().subscribe(config => this.setTheme(config.theme));
  }

  private initSheetChangeListener(): void {
    this.modelService.outputModelChange$.subscribe(sheet => this.showNewSheetLoadedMessage(sheet));
  }

  private setTheme(theme: string) {
    if (theme !== SettingsService.THEME_NIGHT && theme !== SettingsService.THEME_DAY) {
      this.loggingService.warn('Invalid or no theme stored in Local Storage, using default.');
      theme = SettingsService.THEME_DEFAULT
    }

    this.theme = theme;
    this.overlayContainer.themeClass = theme;
  }

  private showNewSheetLoadedMessage(sheet: OutputSheet): void {
    this.translate.get('MESSAGE.SHEET_LOADED', {value: sheet.metaData.identity.name}).subscribe((res: string) => {
      this.snackBar.open(res, '', {
        duration: GurpsyComponent.SNACKBAR_DURATION_TIME,
      });
    });
  }

  private registerCustomIcons(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer): void {
    iconRegistry.addSvgIcon(
      GurpsyComponent.ICON_D6_NAME,
      sanitizer.bypassSecurityTrustResourceUrl(GurpsyComponent.ICON_D6_URL));
    iconRegistry.addSvgIcon(
      GurpsyComponent.ICON_LOGO_NAME,
      sanitizer.bypassSecurityTrustResourceUrl(GurpsyComponent.ICON_LOGO_URL));
    iconRegistry.addSvgIcon(
      GurpsyComponent.ICON_LIBRARY_NAME,
      sanitizer.bypassSecurityTrustResourceUrl(GurpsyComponent.ICON_LIBRARY_URL));
  }
}
