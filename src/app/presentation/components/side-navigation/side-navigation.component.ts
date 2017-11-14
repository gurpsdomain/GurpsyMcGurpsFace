import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SheetBodyService} from '../../../services/sheet-body/sheet-body.service';
import {SheetViewingComponent} from '../../sheet-viewing.component';
import {SheetService} from '../../../services/sheet/sheet.service';
import {SettingsService} from '../../../services/settings/settings.service';
import {Theme} from '../../../models/settings/enums/theme.enum';
import {SheetBodyContent} from '../../../services/sheet-body/enums/sheet-body-content.enum';

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
  public theme: Theme;
  public themeEnum = Theme;

  public showSettingsMenu = false;
  public showLibraryMenu = false;

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

    switch (this.theme) {
      case Theme.NIGHT:
        this.setTheme(Theme.DAY);
        break;
      case Theme.DAY:
        this.setTheme(Theme.NIGHT);
        break;
    }

    this.settingsService.setTheme(this.theme);
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
      .catch(err => this.setTheme(Theme.NIGHT));
  }

  private initSettingsListener(): void {
    this.settingsService.settingsChange$.subscribe(settings => this.setTheme(settings.theme));
  }

  private setTheme(theme: Theme) {
    this.theme = theme;
  }

  private toggleShowLibrary(): boolean {
    this.showLibrary = !this.showLibrary;
    return this.showLibrary;
  }
}


