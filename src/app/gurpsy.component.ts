import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MdIconRegistry, MdSnackBar, OverlayContainer} from '@angular/material';
import {OpenSheetDialogComponent} from './components/dialog/menu/open-sheet-dialog/open-sheet-dialog.component';
import {SettingsService} from './services/front-end/settings/settings.service';
import {AboutDialogComponent} from './components/dialog/menu/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './components/dialog/menu/dice-dialog/dice-dialog.component';
import {LoggingService} from './services/back-end/logging/logging.service';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {SettingsDialogComponent} from './components/dialog/menu/settings-dialog/settings-dialog.component';
import {TranslateService} from '@ngx-translate/core';
import {PageReferenceService} from './services/front-end/page-reference/page-reference.service';
import {Sheet} from './models/sheet/sheet.model';
import {NewSheetComponent} from './components/dialog/template-updaters/new-sheet/new-sheet.component';
import {SheetTemplate} from './models/sheet-template/sheet-template.model';
import {SheetService} from './services/front-end/sheet/sheet.service';
import {GurpsyConstants} from './gurpsy.constants';

@Component({
  selector: 'gurpsy-root',
  templateUrl: './gurpsy.component.html',
  styleUrls: ['./gurpsy.component.scss']
})
export class GurpsyComponent implements OnInit {


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
  private newSheetDialogRef: MdDialogRef<NewSheetComponent>;

  public sheet: Sheet;
  public template: SheetTemplate;
  public editMode: boolean;
  public showLibrary: boolean;
  public theme: string;

  constructor(protected sheetService: SheetService,
              public dialog: MdDialog,
              private settingsService: SettingsService,
              public loggingService: LoggingService,
              private pageReferenceService: PageReferenceService,
              private snackBar: MdSnackBar,
              private translate: TranslateService,
              private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private overlayContainer: OverlayContainer,
              private titleService: Title) {

    this.sheet = new Sheet(new SheetTemplate());

    this.registerCustomIcons(iconRegistry, sanitizer);
  }

  public ngOnInit(): void {
    this.initSheetAndTemplate();
    this.initNewSheetLoadedListener();
    this.initLibrary();
    this.initTheme();
  }

  /**
   * Create a new Sheet..
   */
  public onNewSheet(): void {
    this.newSheetDialogRef = this.dialog.open(NewSheetComponent, {
      width: GurpsyConstants.DIALOG_WIDTH,
      disableClose: false
    });

    this.newSheetDialogRef.componentInstance.template = new SheetTemplate();

    this.newSheetDialogRef.afterClosed().subscribe(template => {
        if (template) {
          this.template = template;
          this.sheetService.loadNewTemplate(this.template);
        }
        this.newSheetDialogRef = null
      }
    );
  }

  /**
   * Close the current sheet, by removing the entry in SessionStorage
   */
  public onCloseSheet(): void {
    console.log('Empty session storage.');
  }

  /**
   * Download the sheet. Note that at this point the user will reveice
   * the template, not the sheet.
   */
  public onDownloadSheet(): void {
    console.log('Provide a downloadable json file.');
  }

  /**
   * Switch edit mode.
   *
   * @param {boolean} If true, the sheet is editable, if false it is in read only mode
   */
  public onEdit(edit: boolean): void {
    this.editMode = edit;
    this.sheetService.setEditMode(edit);
  }

  /**
   * Open a ThrowDice dialog.
   */
  public onOpenThrowDiceDialog(): void {
    this.diceDialogRef = this.dialog.open(DiceDialogComponent, {
      width: GurpsyConstants.DIALOG_WIDTH,
      disableClose: false
    });

    this.diceDialogRef.afterClosed().subscribe(
      this.diceDialogRef = null
    );
  }

  /**
   * Open an About dialog.
   */
  public onOpenAboutDialog(): void {
    this.aboutDialogRef = this.dialog.open(AboutDialogComponent, {
      width: GurpsyConstants.DIALOG_WIDTH,
      disableClose: false
    });

    this.aboutDialogRef.afterClosed().subscribe(
      this.aboutDialogRef = null
    );
  }

  /**
   * Open the OpenSheet dialog.
   */
  public onOpenSheetDialog(): void {
    this.openSheetDialogRef = this.dialog.open(OpenSheetDialogComponent, {
      width: GurpsyConstants.DIALOG_WIDTH,
      disableClose: false
    });

    this.openSheetDialogRef.afterClosed().subscribe(
      this.openSheetDialogRef = null
    );
  }

  /**
   * Open the Settings dialog.
   */
  public onOpenSettingsDialog(): void {
    this.settingsDialogRef = this.dialog.open(SettingsDialogComponent, {
      width: GurpsyConstants.DIALOG_WIDTH,
      disableClose: false
    });

    this.settingsDialogRef.afterClosed().subscribe(
      this.settingsDialogRef = null
    );
  }

  /**
   * Open or close the library.
   *
   * @param {boolean} If true, the Library is shown. Otherwise it is hidden.
   */
  public onShowLibrary(show: boolean): void {
    this.showLibrary = show;
  }

  private initSheetAndTemplate(): void {
    this.fetchSheetAndTemplate();
    this.sheetService.sheetUpdated$.subscribe(any => this.fetchSheetAndTemplate());
  }

  private initLibrary(): void {
    this.pageReferenceService.referenceRequested$.subscribe(pageNumber => this.showLibrary = true);
    this.showLibrary = false;
  }

  private initTheme(): void {
    this.settingsService.getTheme()
      .then(theme => this.setTheme(theme))
      .catch(err => this.setTheme(SettingsService.THEME_DEFAULT));
    this.settingsService.settingsChange$.subscribe(config => this.setTheme(config.theme));
  }

  private initNewSheetLoadedListener(): void {
    this.sheetService.newSheetLoaded$.subscribe(sheet => this.showNewSheetLoadedMessage(sheet));
  }

  private setTheme(theme: string) {
    if (theme !== SettingsService.THEME_NIGHT && theme !== SettingsService.THEME_DAY) {
      this.loggingService.warn('Invalid or no theme stored in Local Storage, using default.');
      theme = SettingsService.THEME_DEFAULT
    }

    this.theme = theme;
    this.overlayContainer.themeClass = theme;
  }

  private showNewSheetLoadedMessage(sheet: Sheet): void {
    if (sheet) {
      this.translate.get('MESSAGE.SHEET_LOADED', {value: sheet.metaData.identity.name}).subscribe((res: string) => {
        this.snackBar.open(res, '', {
          duration: GurpsyConstants.SNACKBAR_DURATION_TIME,
        });
      });
    }
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


  private fetchSheetAndTemplate(): void {
    this.sheetService.getSheet().then(sheet => this.setSheet(sheet));
    this.sheetService.getTemplate().then(template => this.setTemplate(template));
  }

  private setSheet(sheet: Sheet): void {
    this.sheet = sheet;

    this.setTitle(sheet);
  }

  private setTemplate(template: SheetTemplate): void {
    this.template = template;
  }

  private setTitle(sheet: Sheet): void {
    if (sheet) {
      this.titleService.setTitle(sheet.metaData.identity.name);
    } else {
      this.translate.get('APPLICATION').subscribe((res: string) => {
        this.titleService.setTitle(res);
      });
    }
  }
}
