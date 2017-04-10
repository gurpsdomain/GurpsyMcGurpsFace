import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet/sheet.component';
import {SheetHeaderComponent} from './components/sheet/structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './components/sheet/reusable/portrait/portrait.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet/reusable/player-information/player-information.component';
import {DescriptionComponent} from './components/sheet/reusable/description/description.component';
import {PointsComponent} from './components/sheet/reusable/points/points.component';
import {IdentityComponent} from './components/sheet/reusable/identity/identity.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';
import {DeleteSettingsDialogComponent} from './components/dialog/delete-settings-dialog/delete-settings-dialog.component';
import {OpenSheetDialogComponent} from './components/dialog/open-sheet-dialog/open-sheet-dialog.component';
import {StorageService} from './services/storage-service/storage.service';
import {LanguagesService} from './services/languages-service/languages.service';
import {ConfigService} from './services/config-service/config.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {JsonService} from './services/json-service/json.service';
import {ConfigStorageDelegate} from './services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from './services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {NotesComponent} from './components/sheet/reusable/notes/notes.component';
import {SheetBodyComponent} from './components/sheet/structural/sheet-body/sheet-body.component';
import {SkillsComponent} from './components/sheet/reusable/skills/skills.component';
import {SpellsComponent} from './components/sheet/reusable/spells/spells.component';
import {EquipmentComponent} from './components/sheet/reusable/equipment/equipment.component';
import {AdvantagesComponent} from './components/sheet/reusable/advantages/advantages.component';
import {SheetBodyService} from './services/sheet-body-service/sheet-body.service';
// tslint:disable-next-line max-line-length
import {GeneralComponent} from './components/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './components/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './components/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './components/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './components/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './components/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutDialogComponent} from './components/dialog/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './components/dialog/dice-dialog/dice-dialog.component';
import {LoggingService} from './services/logging-service/logging.service';
import { LiftingMovingComponent } from './components/sheet/reusable/lifting-moving/lifting-moving.component';
import { EncumbranceComponent } from './components/sheet/reusable/encumbrance/encumbrance.component';

@NgModule({
  declarations: [
    AboutDialogComponent,
    DiceDialogComponent,
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
    FatigueHitComponent,
    LiftingMovingComponent,
    EncumbranceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule.forRoot()
  ],
  providers: [
    LanguagesService,
    LoggingService,
    ConfigService,
    StorageService,
    ConfigStorageDelegate,
    SheetStorageDelegate,
    ModelReadService,
    JsonService,
    SheetBodyService
  ],
  entryComponents: [
    AboutDialogComponent,
    DeleteSettingsDialogComponent,
    DiceDialogComponent,
    OpenSheetDialogComponent
  ],
  bootstrap: [GurpsyComponent]
})
export class AppModule {
}
