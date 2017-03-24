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
import {ConfigService} from './services/config-service/config.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {JsonService} from './services/json-service/json.service';
import {ConfigStorageDelegate} from './services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from './services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {NotesComponent} from './components/sheet-component/reusable-components/notes-component/notes.component';
import {SheetBodyComponent} from './components/sheet-component/structural-components/sheet-body-component/sheet-body.component';
import {SkillsComponent} from './components/sheet-component/reusable-components/skills-component/skills.component';
import {SpellsComponent} from './components/sheet-component/reusable-components/spells-component/spells.component';
import {EquipmentComponent} from './components/sheet-component/reusable-components/equipment-component/equipment.component';
import {AdvantagesComponent} from './components/sheet-component/reusable-components/advantages-component/advantages.component';
import {SheetBodyService} from './services/sheet-body-service/sheet-body.service';
// tslint:disable-next-line max-line-length
import {GeneralComponent} from './components/sheet-component/structural-components/sheet-body-component/general-component/general.component';
import {AttributesComponent} from './components/sheet-component/reusable-components/attributes-component/attributes.component';
import {HitLocationComponent} from './components/sheet-component/reusable-components/hit-location-component/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './components/sheet-component/structural-components/sheet-body-component/advantages-disadvantages-component/advantages-disadvantages.component';
import {DisadvantagesComponent} from './components/sheet-component/reusable-components/disadvantages-component/disadvantages.component';
import {FatigueHitComponent} from './components/sheet-component/reusable-components/fatigue-hit-component/fatigue-hit.component';
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
    SpellsComponent,
    EquipmentComponent,
    AdvantagesDisadvantagesComponent,
    AdvantagesComponent,
    DisadvantagesComponent,
    GeneralComponent,
    AttributesComponent,
    HitLocationComponent,
    FatigueHitComponent
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
    ConfigService,
    StorageService,
    ConfigStorageDelegate,
    SheetStorageDelegate,
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
