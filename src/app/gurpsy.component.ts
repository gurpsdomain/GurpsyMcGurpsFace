import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatIconRegistry, MatSnackBar} from '@angular/material';
import {OpenSheetDialogComponent} from './presentation/dialoges/generic/open-sheet-dialog/open-sheet-dialog.component';
import {SettingsService} from './services/settings/settings.service';
import {AboutDialogComponent} from './presentation/dialoges/generic/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './presentation/dialoges/generic/dice-dialog/dice-dialog.component';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {PageReferenceService} from './services/page-reference/page-reference.service';
import {Sheet} from './models/sheet/sheet.model';
import {NewSheetComponent} from './presentation/dialoges/template-updaters/new-sheet/new-sheet.component';
import {Template} from './models/template/template.model';
import {SheetService} from './services/sheet/sheet.service';
import {GurpsyConstants} from './gurpsy.constants';

import {JsonConvert} from 'json2typescript';
import {OverlayContainer} from '@angular/cdk/overlay';
import {Theme} from './models/settings/enums/theme.enum';

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

  private aboutDialogRef: MatDialogRef<AboutDialogComponent>;
  private diceDialogRef: MatDialogRef<DiceDialogComponent>;
  private openSheetDialogRef: MatDialogRef<OpenSheetDialogComponent>;
  private newSheetDialogRef: MatDialogRef<NewSheetComponent>;

  public sheet: Sheet;
  public template: Template;

  public templateDownloadName: string;
  public templateJsonHref: any;
  public editMode: boolean;
  public showLibrary: boolean;
  public theme: Theme;
  public themeEnum = Theme;

  constructor(protected sheetService: SheetService,
              public dialog: MatDialog,
              private settingsService: SettingsService,
              private pageReferenceService: PageReferenceService,
              private snackBar: MatSnackBar,
              private translate: TranslateService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private overlayContainer: OverlayContainer,
              private titleService: Title) {

    this.sheet = new Sheet(new Template());

    this.registerCustomIcons(iconRegistry, sanitizer);
  }

  public ngOnInit(): void {
    this.initSheet();
    this.initDownloadLink();
    this.initNewSheetLoadedListener();
    this.initErrorListener();
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

    this.newSheetDialogRef.componentInstance.template = new Template();

    this.newSheetDialogRef.afterClosed().subscribe(template => {
        if (template) {
          this.template = template;
          this.sheetService.loadNewTemplate(this.template);
        }
        this.newSheetDialogRef = null;
      }
    );
  }

  /**
   * Close the current sheet, by removing the entry in SessionStorage.
   */
  public onCloseSheet(): void {
    this.sheetService.closeTemplate();
  }

  /**
   * Delete the current sheet.
   */
  public onDelete(): void {
    this.sheetService.deleteTemplate(this.template);
  }

  /**
   * Switch edit mode.
   *
   * @param {boolean} If true, the sheet is editable, if false it is in read only mode.
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
   * Open or close the library.
   *
   * @param {boolean} If true, the Library is shown. Otherwise it is hidden.
   */
  public onShowLibrary(show: boolean): void {
    this.showLibrary = show;
  }

  /**
   * Handle a change of the selected theme
   */
  public onThemeChange(): void {

    switch (this.theme) {
      case Theme.NIGHT:
        this.overlayContainer.getContainerElement().classList.remove(Theme.NIGHT);
        this.setTheme(Theme.DAY);
        break;
      case Theme.DAY:
        this.overlayContainer.getContainerElement().classList.remove(Theme.DAY);
        this.setTheme(Theme.NIGHT);
        break;
    }

    this.settingsService.setTheme(this.theme);
  }

  private initDownloadLink(): void {
    this.sheetService.getTemplate().then(template => this.setTemplate(template));
    this.sheetService.sheetUpdated$.subscribe(sheet => this.sheetService.getTemplate()
      .then(template => this.setTemplate(template)));
  }

  private initSheet(): void {
    this.sheetService.getSheet().then(sheet => this.setSheet(sheet));
    this.sheetService.sheetUpdated$.subscribe(sheet => this.sheetService.getSheet()
      .then(updatedSheet => this.setSheet(updatedSheet)));
  }

  private initLibrary(): void {
    this.pageReferenceService.referenceRequested$.subscribe(pageNumber => this.showLibrary = true);
    this.showLibrary = false;
  }

  private initTheme(): void {
    this.settingsService.getTheme()
      .then(theme => this.setTheme(theme))
      .catch(err => this.setTheme(Theme.NIGHT));
    this.settingsService.settingsChange$.subscribe(config => this.setTheme(config.theme));
  }

  private initNewSheetLoadedListener(): void {
    this.sheetService.newSheetLoaded$.subscribe(sheet => this.showNewSheetLoadedMessage(sheet));
  }

  private initErrorListener(): void {
    this.sheetService.templateStoreError$.subscribe(any => this.showTemplateStoreError());
  }

  private setTheme(theme: Theme) {
    this.theme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
  }

  private showNewSheetLoadedMessage(sheet: Sheet): void {
    if (sheet) {
      this.translate.get('MESSAGE.SHEET_LOADED', {value: sheet.metaData.identity.name}).subscribe((res: string) => {
        this.snackBar.open(res, '', {
          duration: GurpsyConstants.SNACKBAR_DURATION_TIME
        });
      });
    }
  }

  private showTemplateStoreError(): void {
    this.translate.get('MESSAGE.UNABLE_TO_STORE_SHEET').subscribe((res: string) => {
      this.snackBar.open(res, '', {
        duration: GurpsyConstants.SNACKBAR_DURATION_TIME
      });
    });
  }

  private registerCustomIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
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

  private setSheet(sheet: Sheet): void {
    this.sheet = sheet;
    this.setTitle(sheet);
  }

  private setTemplate(template: Template): void {
    this.template = template;
    this.setDownloadLink(template);
  }

  private setDownloadLink(template: Template): void {
    if (template) {
      const jsonConvert = new JsonConvert();
      const jsonTemplate = JSON.stringify(jsonConvert.serialize(template));
      this.templateDownloadName = template.getFileName() + '.json';
      this.templateJsonHref = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(jsonTemplate));
    }
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
