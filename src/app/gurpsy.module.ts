import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet-component/sheet.component';
import {SheetHeaderComponent} from './components/sheet-component/structural-components/sheet-header-component/sheet-header.component';
import {PortraitComponent} from './components/sheet-component/reusable-components/portrait-component/portrait.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet-component/reusable-components/player-information-component/player-information.component';
import {DescriptionComponent} from './components/sheet-component/reusable-components/description-component/description.component';
import {PointsComponent} from './components/sheet-component/reusable-components/points-component/points.component';
import {IdentityComponent} from './components/sheet-component/reusable-components/identity-component/identity.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';
import {DeleteSettingsDialogComponent} from './components/dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {OpenSheetDialogComponent} from './components/dialog-component/open-sheet-dialog/open-sheet-dialog.component';
import {StorageService} from './services/storage-service/storage.service';
import {LanguagesService} from './services/languages-service/languages.service';
import {ThemeService} from './services/theme-service/theme.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {JsonService} from './services/json-service/json.service';
import {ThemeStorageDelegate} from './services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from './services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {SheetStorageDelegate} from './services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import { NotesComponent } from './components/sheet-component/reusable-components/notes-component/notes.component';
import { SheetBodyComponent } from './components/sheet-component/structural-components/sheet-body-component/sheet-body.component';
import { SkillsComponent } from './components/sheet-component/reusable-components/skills-component/skills.component';
import { MagicComponent } from './components/sheet-component/structural-components/sheet-body-component/magic-component/magic.component';
import { EquipmentComponent } from './components/sheet-component/reusable-components/equipment-component/equipment.component';
import { AdvantagesComponent } from './components/sheet-component/reusable-components/advantages-component/advantages.component';
import {SheetBodyService} from './services/sheet-body-service/sheet-body.service';
import { GeneralComponent } from './components/sheet-component/structural-components/sheet-body-component/general-component/general.component';
import { AttributesComponent } from './components/sheet-component/reusable-components/attributes-component/attributes.component';
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
    OpenSheetDialogComponent,
    NotesComponent,
    SheetBodyComponent,
    SkillsComponent,
    MagicComponent,
    EquipmentComponent,
    AdvantagesComponent,
    GeneralComponent,
    AttributesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule.forRoot()
  ],
  providers: [
    LanguagesService,
    ThemeService,
    StorageService,
    ThemeStorageDelegate,
    SheetStorageDelegate,
    LanguageStorageDelegate,
    ModelReadService,
    JsonService,
    SheetBodyService
   ],
  entryComponents: [
    DeleteSettingsDialogComponent,
    OpenSheetDialogComponent
  ],
  bootstrap: [GurpsyComponent]
})
export class AppModule {
}
