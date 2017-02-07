import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {FlexLayoutModule} from '@angular/flex-layout';

import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet-component/sheet.component';
import {SheetHeaderComponent} from './components/sheet-component/sheet-header-component/sheet-header.component';
import {PortraitComponent} from './components/sheet-component/sheet-header-component/portrait-component/portrait.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet-component/sheet-header-component/player-information-component/player-information.component';
import {DescriptionComponent} from './components/sheet-component/sheet-header-component/description-component/description.component';
import {PointsComponent} from './components/sheet-component/sheet-header-component/points-component/points.component';
import {IdentityComponent} from './components/sheet-component/sheet-header-component/identity-component/identity.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';
import {DeleteSettingsDialogComponent} from './components/dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {OpenSheetDialogComponent} from './components/dialog-component/open-sheet-dialog/open-sheet-dialog.component';
import {StorageService} from './services/storage-service/storage.service';
import {LanguagesService} from './services/languages-service/languages.service';
import {ThemeService} from './services/theme-service/theme.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {JsonService} from './services/json-service/json.service';
@NgModule({
  declarations: [
    GurpsyComponent,
    SheetComponent,
    SheetHeaderComponent,
    PortraitComponent,
    PlayerInformationComponent,
    DescriptionComponent,
    PointsComponent,
    IdentityComponent,
    SideNavigationComponent,
    DeleteSettingsDialogComponent,
    OpenSheetDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    TranslateModule.forRoot()
  ],
  providers: [
    LanguagesService,
    ThemeService,
    StorageService,
    ModelReadService,
    JsonService
   ],
  entryComponents: [
    DeleteSettingsDialogComponent,
    OpenSheetDialogComponent
  ],
  bootstrap: [GurpsyComponent]
})
export class AppModule {
}
