import 'hammerjs';
import {NgModule} from '@angular/core';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './presentation/sheet/sheet.component';
import {SheetHeaderComponent} from './presentation/sheet/structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './presentation/sheet/reusable/portrait/portrait.component';
import {PlayerInformationComponent} from './presentation/sheet/reusable/player-information/player-information.component';
import {DescriptionComponent} from './presentation/sheet/reusable/description/description.component';
import {PointsComponent} from './presentation/sheet/reusable/points/points.component';
import {IdentityComponent} from './presentation/sheet/reusable/identity/identity.component';
import {SideNavigationComponent} from './presentation/components/side-navigation/side-navigation.component';
import {OpenSheetDialogComponent} from './presentation/dialoges/generic/open-sheet-dialog/open-sheet-dialog.component';
import {SettingsService} from './services/settings/settings.service';
import {SettingsRepository} from './repositories/settings/settings.repository';
import {TemplateRepository} from './repositories/template/template.repository';
import {NotesComponent} from './presentation/sheet/reusable/notes/notes.component';
import {SkillsComponent} from './presentation/sheet/reusable/skills/skills.component';
import {SpellsComponent} from './presentation/sheet/reusable/spells/spells.component';
import {EquipmentComponent} from './presentation/sheet/reusable/equipment/equipment.component';
import {AdvantagesComponent} from './presentation/sheet/reusable/advantages/advantages.component';
import {GeneralComponent} from './presentation/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './presentation/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './presentation/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './presentation/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './presentation/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './presentation/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from './presentation/sheet/reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from './presentation/sheet/reusable/encumbrance/encumbrance.component';
import {AboutDialogComponent} from './presentation/dialoges/generic/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './presentation/dialoges/generic/dice-dialog/dice-dialog.component';
import {LoggingService} from './services/logging/logging.service';
import {PageReferenceComponent} from './presentation/components/generic/page-reference/page-reference.component';
import {BookViewerComponent} from './presentation/components/book-viewer/book-viewer.component';
import {PageReferenceService} from './services/page-reference/page-reference.service';
import {FileFormComponent} from './presentation/components/form/file/file.form.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GurpsyMaterialModule} from './modules/material.module';
import {GurpsyAngularModule} from './modules/angular.module';
// tslint:disable-next-line max-line-length
import {PortraitUpdaterDialogComponent} from './presentation/dialoges/template-updaters/portrait-updater/portrait-updater-dialog.component';
import {SheetViewingComponent} from './presentation/sheet-viewing.component';
import {AvatarComponent} from './presentation/components/generic/avatar/avatar.component';
import {NewSheetComponent} from './presentation/dialoges/template-updaters/new-sheet/new-sheet.component';
import {IdentityUpdaterComponent} from './presentation/dialoges/template-updaters/identity-updater/identity-updater.component';
import {TemplateUpdaterDialogComponent} from './presentation/dialoges/template-updaters/template-updater-dialog.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationUpdaterComponent} from './presentation/dialoges/template-updaters/player-information-updater/player-information-updater.component';
import {SheetService} from './services/sheet/sheet.service';
import {SheetUpdatingComponent} from './presentation/sheet-updating.component';
import {SelectSheetComponent} from './presentation/components/select-sheet/select-sheet.component';
import {HttpClient} from '@angular/common/http';
import {SelectSheetButtonComponent} from './presentation/components/generic/select-sheet-button/select-sheet-button.component';
// tslint:disable-next-line max-line-length
import {DescriptionUpdaterComponent} from './presentation/dialoges/template-updaters/description-updater/description-updater.component';
import {WeightComponent} from './presentation/sheet/reusable/weight/weight.component';
import {HeightComponent} from './presentation/sheet/reusable/height/height.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {LibraryService} from './services/library/library.service';
import {AdvantagesTableComponent} from './presentation/library/tables/advantages-table/advantages-table.component';
import {ImageCropperModule} from 'ngx-img-cropper';

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
    DescriptionUpdaterComponent,
    DiceDialogComponent,
    DisadvantagesComponent,
    EncumbranceComponent,
    EquipmentComponent,
    FatigueHitComponent,
    FileFormComponent,
    GeneralComponent,
    GurpsyComponent,
    HeightComponent,
    HitLocationComponent,
    IdentityComponent,
    IdentityUpdaterComponent,
    LiftingMovingComponent,
    LiftingMovingComponent,
    NotesComponent,
    OpenSheetDialogComponent,
    PageReferenceComponent,
    PortraitComponent,
    PlayerInformationComponent,
    PlayerInformationUpdaterComponent,
    PointsComponent,
    SheetComponent,
    SheetHeaderComponent,
    SideNavigationComponent,
    SkillsComponent,
    SpellsComponent,
    PortraitUpdaterDialogComponent,
    SheetViewingComponent,
    SheetUpdatingComponent,
    TemplateUpdaterDialogComponent,
    AvatarComponent,
    NewSheetComponent,
    SelectSheetComponent,
    SelectSheetButtonComponent,
    WeightComponent,
    AdvantagesTableComponent
  ],
  imports: [
    ImageCropperModule,
    GurpsyAngularModule,
    GurpsyMaterialModule,
    PdfViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LibraryService,
    LoggingService,
    TemplateRepository,
    SheetService,
    SettingsService,
    SettingsRepository,
    PageReferenceService
  ],
  entryComponents: [
    AboutDialogComponent,
    DescriptionUpdaterComponent,
    DiceDialogComponent,
    IdentityUpdaterComponent,
    NewSheetComponent,
    OpenSheetDialogComponent,
    PlayerInformationUpdaterComponent,
    PortraitUpdaterDialogComponent
  ],
  bootstrap: [GurpsyComponent]
})
export class AppModule {
}
