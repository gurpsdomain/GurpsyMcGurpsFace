import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SheetBodyContent, SheetBodyService} from '../../../services/sheet-body/sheet-body.service';
import {SheetViewingComponent} from '../../sheet-viewing.component';
import {SheetService} from '../../../services/sheet/sheet.service';
import {SettingsService} from '../../../services/settings/settings.service';
import {Settings} from '../../../models/settings/settings.model';

@Component({
  selector: 'gurpsy-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent extends SheetViewingComponent implements OnInit {


  @Output() onShowLibrary: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onCloseSideNavigation: EventEmitter<any> = new EventEmitter();

  public sheetBodyComponents = SheetBodyContent;
  public sheetBodyContent: SheetBodyContent = SheetBodyContent.GENERAL;
  public showLibrary = false;
  public nightTheme = false;

  constructor(private sheetBodyService: SheetBodyService,
              private settingsService: SettingsService,
              modelService: SheetService) {
    super(modelService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.initTheme();
    this.initSettingsListener();

    this.sheetBodyService.sheetBodyChange$.subscribe(sheetBodyContent => this.sheetBodyContent = sheetBodyContent);
  }

  public onCloseSideNav(): void {
    this.onCloseSideNavigation.next();
  }

  /**
   * Handle a change of the selected theme
   */
  public onThemeChange(): void {
    this.nightTheme = !this.nightTheme;

    const theme = this.nightTheme ? SettingsService.THEME_NIGHT : SettingsService.THEME_DAY;
    this.setTheme(theme);

    this.settingsService.setTheme(theme);
  }


  public onLibraryClick(): void {
    this.onShowLibrary.next(this.toggleShowLibrary());
  }

  public onSheetBodyClick(sheetBodyComponent: SheetBodyContent): void {
    this.showLibrary = false;
    this.onShowLibrary.next(false);
    this.sheetBodyService.setSheetBodyContent(sheetBodyComponent);
  }

  private initTheme(): void {
    this.settingsService.getTheme()
      .then(theme => this.setTheme(theme))
      .catch(err => this.setTheme(SettingsService.THEME_DEFAULT));
  }

  private initSettingsListener(): void {
    this.settingsService.settingsChange$.subscribe(settings => this.updateSettings(settings));
  }

  private updateSettings(settings: Settings): void {
    this.setTheme(settings.theme);
  }

  private setTheme(theme: string) {
    this.nightTheme = theme === SettingsService.THEME_NIGHT;
  }

  private toggleShowLibrary(): boolean {
    this.showLibrary = !this.showLibrary;
    return this.showLibrary;
  }


}


