import 'hammerjs';
import {NgModule} from '@angular/core';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './presentation/components/sheet/sheet.component';
import {SheetHeaderComponent} from './presentation/components/sheet/structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './presentation/components/sheet/reusable/portrait/portrait.component';
import {PlayerInformationComponent} from './presentation/components/sheet/reusable/player-information/player-information.component';
import {DescriptionComponent} from './presentation/components/sheet/reusable/description/description.component';
import {PointsComponent} from './presentation/components/sheet/reusable/points/points.component';
import {IdentityComponent} from './presentation/components/sheet/reusable/identity/identity.component';
import {SideNavigationComponent} from './presentation/components/side-navigation/side-navigation.component';
import {OpenSheetDialogComponent} from './presentation/dialoges/generic/open-sheet-dialog/open-sheet-dialog.component';
import {SettingsService} from './services/settings/settings.service';
import {SettingsRepository} from './repositories/settings/settings.repository';
import {TemplateRepository} from './repositories/template/template.repository';
import {NotesComponent} from './presentation/components/sheet/reusable/notes/notes.component';
import {SheetBodyComponent} from './presentation/components/sheet/structural/sheet-body/sheet-body.component';
import {SkillsComponent} from './presentation/components/sheet/reusable/skills/skills.component';
import {SpellsComponent} from './presentation/components/sheet/reusable/spells/spells.component';
import {EquipmentComponent} from './presentation/components/sheet/reusable/equipment/equipment.component';
import {AdvantagesComponent} from './presentation/components/sheet/reusable/advantages/advantages.component';
import {SheetBodyService} from './services/sheet-body/sheet-body.service';
// tslint:disable-next-line max-line-length
import {GeneralComponent} from './presentation/components/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './presentation/components/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './presentation/components/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './presentation/components/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './presentation/components/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './presentation/components/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from './presentation/components/sheet/reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from './presentation/components/sheet/reusable/encumbrance/encumbrance.component';
import {AboutDialogComponent} from './presentation/dialoges/generic/about-dialog/about-dialog.component';
import {DiceDialogComponent} from './presentation/dialoges/generic/dice-dialog/dice-dialog.component';
import {LoggingService} from './services/logging/logging.service';
import {SettingsDialogComponent} from './presentation/dialoges/generic/settings-dialog/settings-dialog.component';
import {PageReferenceComponent} from './presentation/components/generic/page-reference/page-reference.component';
import {BookViewerComponent} from './presentation/components/book-viewer/book-viewer.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {PageReferenceService} from './services/page-reference/page-reference.service';
import {FileFormComponent} from './presentation/components/form/file/file.form.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GurpsyMaterialModule} from './modules/material.module';
import {GurpsyAngularModule} from './modules/angular.module';
// tslint:disable-next-line max-line-length
import {PortraitUpdaterDialogComponent} from './presentation/dialoges/template-updaters/portrait-updater/portrait-updater-dialog.component';
import {SheetViewingComponent} from './presentation/components/sheet-viewing.component';
import {ImageCropperModule} from 'ng2-img-cropper';
import {AvatarComponent} from './presentation/components/generic/avatar/avatar.component';
import {NewSheetComponent} from './presentation/dialoges/template-updaters/new-sheet/new-sheet.component';
import {IdentityUpdaterComponent} from './presentation/dialoges/template-updaters/identity-updater/identity-updater.component';
import {TemplateUpdaterDialogComponent} from './presentation/dialoges/template-updaters/template-updater-dialog.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationUpdaterComponent} from './presentation/dialoges/template-updaters/player-information-updater/player-information-updater.component';
import {SheetService} from './services/sheet/sheet.service';
import {SheetUpdatingComponent} from './presentation/components/sheet-updating.component';
import {SelectSheetComponent} from './presentation/components/select-sheet/select-sheet.component';
import {HttpClient} from '@angular/common/http';
import {SelectSheetButtonComponent} from './presentation/components/generic/select-sheet-button/select-sheet-button.component';
// tslint:disable-next-line max-line-length
import {DescriptionUpdaterComponent} from './presentation/dialoges/template-updaters/description-updater/description-updater.component';
import {
  WeightDisplayComponent
} from './presentation/components/generic/weight-display/weight-display.component';
import {TemplateViewingComponent} from './presentation/components/template-viewing.component';

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
    PortraitUpdaterDialogComponent,
    SheetViewingComponent,
    SheetUpdatingComponent,
    TemplateUpdaterDialogComponent,
    TemplateViewingComponent,
    AvatarComponent,
    NewSheetComponent,
    SelectSheetComponent,
    SelectSheetButtonComponent,
    WeightDisplayComponent
  ],
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
    TemplateRepository,
    SheetService,
    SheetBodyService,
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
    SettingsDialogComponent,
    PlayerInformationUpdaterComponent,
    PortraitUpdaterDialogComponent
  ],
  bootstrap: [GurpsyComponent]
})
export class AppModule {
}
