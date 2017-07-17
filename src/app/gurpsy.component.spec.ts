/* tslint:disable:no-unused-variable */
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {TranslateService, TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet/sheet.component';
import {SheetHeaderComponent} from './components/sheet/structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './components/sheet/reusable/portrait/portrait.component';
import {IdentityComponent} from './components/sheet/reusable/identity/identity.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet/reusable/player-information/player-information.component';
import {DescriptionComponent} from './components/sheet/reusable/description/description.component';
import {PointsComponent} from './components/sheet/reusable/points/points.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';
import {StorageService} from './services/back-end/storage/storage.service';
import {SettingsService} from './services/front-end/settings/settings.service';
import {ModelService} from './services/front-end/model/model.service';
import {SettingsStorageDelegate} from './services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from './services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SheetBodyComponent} from './components/sheet/structural/sheet-body/sheet-body.component';
import {NotesComponent} from './components/sheet/reusable/notes/notes.component';
import {AdvantagesComponent} from './components/sheet/reusable/advantages/advantages.component';
import {EquipmentComponent} from './components/sheet/reusable/equipment/equipment.component';
import {SpellsComponent} from './components/sheet/reusable/spells/spells.component';
import {SkillsComponent} from './components/sheet/reusable/skills/skills.component';
import {SheetBodyService} from './services/front-end/sheet-body/sheet-body.service';
import {GeneralComponent} from './components/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './components/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './components/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './components/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './components/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './components/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {LoggingService} from './services/back-end/logging/logging.service';
import {EncumbranceComponent} from './components/sheet/reusable/encumbrance/encumbrance.component';
import {LiftingMovingComponent} from './components/sheet/reusable/lifting-moving/lifting-moving.component';
import {PageReferenceComponent} from './components/generic/page-reference/page-reference.component';
import {BookViewerComponent} from './components/book-viewer/book-viewer.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {FileInputComponent} from './components/generic/file-input/file-input.component';
import {GurpsyMaterialModule} from './modules/material.module';
import {Http, HttpModule, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {ModelTransformerService} from './services/back-end/model-transformer/model-transformer.service';
import {PageReferenceService} from './services/front-end/page-reference/page-reference.service';
import {WeightPipe} from './pipes/weight.pipe';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('GurpsyComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<GurpsyComponent>;

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
        BookViewerComponent,
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
        FileInputComponent,
        WeightPipe
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
        ModelTransformerService,
        BaseRequestOptions,
        SettingsService,
        SettingsStorageDelegate,
        TranslateService,
        LoggingService,
        PageReferenceService,
        StorageService,
        SheetStorageDelegate,
        ModelService,
        SheetBodyService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GurpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
