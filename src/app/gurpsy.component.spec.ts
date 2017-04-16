/* tslint:disable:no-unused-variable */
import {TestBed, async} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
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
import {StorageService} from './services/storage-service/storage.service';
import {ConfigService} from './services/config-service/config.service';
import {LanguagesService} from './services/languages-service/languages.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {JsonService} from './services/json-service/json.service';
import {ConfigStorageDelegate} from './services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from './services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SheetBodyComponent} from './components/sheet/structural/sheet-body/sheet-body.component';
import {NotesComponent} from './components/sheet/reusable/notes/notes.component';
import {AdvantagesComponent} from './components/sheet/reusable/advantages/advantages.component';
import {EquipmentComponent} from './components/sheet/reusable/equipment/equipment.component';
import {SpellsComponent} from './components/sheet/reusable/spells/spells.component';
import {SkillsComponent} from './components/sheet/reusable/skills/skills.component';
import {SheetBodyService} from './services/sheet-body-service/sheet-body.service';
// tslint:disable-next-line max-line-length
import {GeneralComponent} from './components/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './components/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './components/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './components/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './components/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './components/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {LoggingService} from './services/logging-service/logging.service';
import {EncumbranceComponent} from './components/sheet/reusable/encumbrance/encumbrance.component';
import {LiftingMovingComponent} from './components/sheet/reusable/lifting-moving/lifting-moving.component';
import {PageReferenceComponent} from './components/sheet/reusable/page-reference/page-reference.component';

describe('GurpsyComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesDisadvantagesComponent,
        AdvantagesComponent,
        AttributesComponent,
        DisadvantagesComponent,
        EncumbranceComponent,
        EquipmentComponent,
        FatigueHitComponent,
        GurpsyComponent,
        LiftingMovingComponent,
        SpellsComponent,
        SkillsComponent,
        PageReferenceComponent,
        SheetComponent,
        SheetHeaderComponent,
        GeneralComponent,
        SheetBodyComponent,
        PortraitComponent,
        IdentityComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        SideNavigationComponent,
        NotesComponent,
        HitLocationComponent
      ],
      imports: [
        FormsModule,
        MaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        ConfigService,
        LanguagesService,
        LoggingService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
        ModelReadService,
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
