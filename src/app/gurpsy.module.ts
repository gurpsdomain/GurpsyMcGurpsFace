import 'hammerjs';
import {NgModule} from '@angular/core';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet/sheet.component';
import {SheetHeaderComponent} from './components/sheet/structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './components/sheet/reusable/portrait/portrait.component';
import {PlayerInformationComponent} from './components/sheet/reusable/player-information/player-information.component';
import {DescriptionComponent} from './components/sheet/reusable/description/description.component';
import {PointsComponent} from './components/sheet/reusable/points/points.component';
import {IdentityComponent} from './components/sheet/reusable/identity/identity.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';
import {OpenSheetDialogComponent} from './components/dialog/menu/open-sheet-dialog/open-sheet-dialog.component';
import {SettingsService} from './services/front-end/settings/settings.service';
import {SettingsStorageService} from './services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from './services/back-end/template-storage/template-storage.service';
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
import {AboutDialogComponent} from './components/dialog/menu/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './components/dialog/menu/dice-dialog/dice-dialog.component';
import {LoggingService} from './services/back-end/logging/logging.service';
import {SettingsDialogComponent} from './components/dialog/menu/settings-dialog/settings-dialog.component';
import {PageReferenceComponent} from './components/generic/page-reference/page-reference.component';
import {BookViewerComponent} from './components/book-viewer/book-viewer.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {PageReferenceService} from './services/front-end/page-reference/page-reference.service';
import {FileInputComponent} from './components/generic/file-input/file-input.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GurpsyMaterialModule} from './modules/material.module';
import {GurpsyAngularModule} from './modules/angular.module';
import {WeightPipe} from './pipes/weight.pipe';
// tslint:disable-next-line max-line-length
import {PortraitUpdaterDialogComponent} from './components/dialog/template-updaters/portrait-updater-dialog/portrait-updater-dialog.component';
import {SheetViewingComponent} from './components/sheet-viewing.component';
import {ImageCropperModule} from 'ng2-img-cropper';
import {AvatarComponent} from './components/generic/avatar/avatar.component';
import {NewSheetComponent} from './components/dialog/template-updaters/new-sheet/new-sheet.component';
import {IdentityUpdaterComponent} from './components/dialog/template-updaters/identity-updater/identity-updater.component';
import {TemplateUpdaterDialogComponent} from './components/dialog/template-updaters/template-updater-dialog.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationUpdaterComponent} from './components/dialog/template-updaters/player-information-updater/player-information-updater.component';
import {SheetService} from './services/front-end/sheet/sheet.service';
import {SheetUpdatingComponent} from './components/sheet-updating.component';
import {SelectSheetComponent} from './components/select-sheet/select-sheet.component';
import {HttpClient} from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutDialogComponent,
    AdvantagesComponent,
    AdvantagesDisadvantagesComponent,
    AttributesComponent,
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
    IdentityUpdaterComponent,
    LiftingMovingComponent,
    LiftingMovingComponent,
    NotesComponent,
    OpenSheetDialogComponent,
    PageReferenceComponent,
    PdfViewerComponent,
    PortraitComponent,
    PlayerInformationComponent,
    PlayerInformationUpdaterComponent,
    PointsComponent,
    SheetBodyComponent,
    SheetComponent,
    SheetHeaderComponent,
    SettingsDialogComponent,
    SideNavigationComponent,
    SkillsComponent,
    SpellsComponent,
    WeightPipe,
    PortraitUpdaterDialogComponent,
    SheetViewingComponent,
    SheetUpdatingComponent,
    TemplateUpdaterDialogComponent,
    AvatarComponent,
    NewSheetComponent,
    SelectSheetComponent],
  imports: [
    ImageCropperModule,
    GurpsyAngularModule,
    GurpsyMaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LoggingService,
    TemplateStorageService,
    SheetService,
    SheetBodyService,
    SettingsService,
    SettingsStorageService,
    PageReferenceService
  ],
  entryComponents: [
    AboutDialogComponent,
    DiceDialogComponent,
    IdentityUpdaterComponent,
    NewSheetComponent,
    OpenSheetDialogComponent,
    SettingsDialogComponent,
    PlayerInformationUpdaterComponent,
    PortraitUpdaterDialogComponent
  ],
  bootstrap: [GurpsyComponent]
})
export class AppModule {
}
