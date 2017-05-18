/* tslint:disable:no-unused-variable */
import {TestBed, async} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet/sheet.component';
// tslint:disable-next-line max-line-length
import {SheetHeaderComponent} from './components/sheet/structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './components/sheet/reusable/portrait/portrait.component';
import {IdentityComponent} from './components/sheet/reusable/identity/identity.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet/reusable/player-information/player-information.component';
import {DescriptionComponent} from './components/sheet/reusable/description/description.component';
import {PointsComponent} from './components/sheet/reusable/points/points.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';
import {StorageService} from './services/back-end/storage-service/storage.service';
import {SettingsService} from './services/front-end/settings-service/settings.service';
import {LanguagesService} from './services/front-end/languages-service/languages.service';
import {ModelService} from './services/front-end/model-service/model.service';
import {JsonService} from './services/back-end/json-service/json.service';
import {ConfigStorageDelegate} from './services/back-end/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from './services/back-end/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SheetBodyComponent} from './components/sheet/structural/sheet-body/sheet-body.component';
import {NotesComponent} from './components/sheet/reusable/notes/notes.component';
import {AdvantagesComponent} from './components/sheet/reusable/advantages/advantages.component';
import {EquipmentComponent} from './components/sheet/reusable/equipment/equipment.component';
import {SpellsComponent} from './components/sheet/reusable/spells/spells.component';
import {SkillsComponent} from './components/sheet/reusable/skills/skills.component';
import {SheetBodyService} from './services/front-end/sheet-body-service/sheet-body.service';
// tslint:disable-next-line max-line-length
import {GeneralComponent} from './components/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './components/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './components/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './components/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './components/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './components/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {LoggingService} from './services/back-end/logging-service/logging.service';
import {EncumbranceComponent} from './components/sheet/reusable/encumbrance/encumbrance.component';
import {LiftingMovingComponent} from './components/sheet/reusable/lifting-moving/lifting-moving.component';
import {PageReferenceComponent} from './components/generic/page-reference/page-reference.component';
import {LibraryComponent} from './components/library/library.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {FileInputComponent} from './components/generic/file-input/file-input.component';
import {GurpsyMaterialModule} from './gurpsy-material.module';
import {Http, ConnectionBackend, RequestOptions, HttpModule, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('GurpsyComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesDisadvantagesComponent,
        AdvantagesComponent,
        AttributesComponent,
        DescriptionComponent,
        DisadvantagesComponent,
        EncumbranceComponent,
        EquipmentComponent,
        FatigueHitComponent,
        GeneralComponent,
        GurpsyComponent,
        HitLocationComponent,
        IdentityComponent,
        LibraryComponent,
        LiftingMovingComponent,
        NotesComponent,
        PageReferenceComponent,
        PortraitComponent,
        PlayerInformationComponent,
        PointsComponent,
        SideNavigationComponent,
        SheetComponent,
        SheetHeaderComponent,
        SheetBodyComponent,
        SpellsComponent,
        SkillsComponent,
        PdfViewerComponent,
        FileInputComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        SettingsService,
        ConfigStorageDelegate,
        LanguagesService,
        LoggingService,
        StorageService,
        SheetStorageDelegate,
        ModelService,
        JsonService,
        SheetBodyService
      ]
    });
  });

  it('should create GurpsyMcGurpsFace', async(() => {
    const fixture = TestBed.createComponent(GurpsyComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
