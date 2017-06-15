import {NgModule} from '@angular/core';
import {Http} from '@angular/http';
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
import {OpenSheetDialogComponent} from './components/dialog/open-sheet-dialog/open-sheet-dialog.component';
import {StorageService} from './services/back-end/storage/storage.service';
import {SettingsService} from './services/front-end/settings/settings.service';
import {ModelService} from './services/front-end/model/model.service';
import {SettingsStorageDelegate} from './services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from './services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {NotesComponent} from './components/sheet/reusable/notes/notes.component';
import {SheetBodyComponent} from './components/sheet/structural/sheet-body/sheet-body.component';
import {SkillsComponent} from './components/sheet/reusable/skills/skills.component';
import {SpellsComponent} from './components/sheet/reusable/spells/spells.component';
import {EquipmentComponent} from './components/sheet/reusable/equipment/equipment.component';
import {AdvantagesComponent} from './components/sheet/reusable/advantages/advantages.component';
import {SheetBodyService} from './services/front-end/sheet-body/sheet-body.service';
// tslint:disable-next-line max-line-length
import {GeneralComponent} from './components/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './components/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './components/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './components/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './components/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './components/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from './components/sheet/reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from './components/sheet/reusable/encumbrance/encumbrance.component';
import {AboutDialogComponent} from './components/dialog/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './components/dialog/dice-dialog/dice-dialog.component';
import {LoggingService} from './services/back-end/logging/logging.service';
import {SettingsDialogComponent} from './components/dialog/settings-dialog/settings-dialog.component';
import {PageReferenceComponent} from './components/generic/page-reference/page-reference.component';
import {BookViewerComponent} from './components/book-viewer/book-viewer.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {BookConfigurationComponent} from './components/generic/book-configuration/book-configuration.component';
import {BooksConfigurationComponent} from './components/generic/books-configuration/books-configuration.component';
import {PageReferenceService} from './services/front-end/page-reference/page-reference.service';
import {FileInputComponent} from './components/generic/file-input/file-input.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GurpsyMaterialModule} from './modules/material.module';
import {ModelTransformerService} from './services/back-end/model-transformer/model-transformer.service';
import {GurpsyAngularModule} from './modules/angular.module';
import { WeightComponent } from './components/generic/weight/weight.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutDialogComponent,
    AdvantagesComponent,
    AdvantagesDisadvantagesComponent,
    AttributesComponent,
    BookConfigurationComponent,
    BooksConfigurationComponent,
    BookViewerComponent,
    DescriptionComponent,
    DiceDialogComponent,
    DisadvantagesComponent,
    EncumbranceComponent,
    EquipmentComponent,
    FatigueHitComponent,
    FileInputComponent,
    GeneralComponent,
    GurpsyComponent,
    HitLocationComponent,
    IdentityComponent,
    LiftingMovingComponent,
    LiftingMovingComponent,
    NotesComponent,
    OpenSheetDialogComponent,
    PageReferenceComponent,
    PdfViewerComponent,
    PortraitComponent,
    PlayerInformationComponent,
    PointsComponent,
    SheetBodyComponent,
    SheetComponent,
    SheetHeaderComponent,
    SettingsDialogComponent,
    SideNavigationComponent,
    SkillsComponent,
    SpellsComponent,
    WeightComponent,
  ],
  imports: [
    GurpsyAngularModule,
    GurpsyMaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [
    SettingsService,
    SettingsStorageDelegate,
    PageReferenceService,
    LoggingService,
    StorageService,
    SheetStorageDelegate,
    ModelService,
    ModelTransformerService,
    SheetBodyService
  ],
  entryComponents: [
    AboutDialogComponent,
    SettingsDialogComponent,
    DiceDialogComponent,
    OpenSheetDialogComponent
  ],
  bootstrap: [GurpsyComponent]
})
export class AppModule {
}
