import {SheetComponent} from './sheet.component';
import {SheetHeaderComponent} from './structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './reusable/portrait/portrait.component';
import {IdentityComponent} from './reusable/identity/identity.component';
import {PlayerInformationComponent} from './reusable/player-information/player-information.component';
import {DescriptionComponent} from './reusable/description/description.component';
import {PointsComponent} from './reusable/points/points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from 'ng2-translate';
import {ModelReadService} from '../../services/model-read-service/model-read.service';
import {JsonService} from '../../services/json-service/json.service';
import {StorageService} from '../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SheetBodyComponent} from './structural/sheet-body/sheet-body.component';
import {NotesComponent} from './reusable/notes/notes.component';
import {AdvantagesComponent} from './reusable/advantages/advantages.component';
import {EquipmentComponent} from './reusable/equipment/equipment.component';
import {SpellsComponent} from './reusable/spells/spells.component';
import {SkillsComponent} from './reusable/skills/skills.component';
import {SheetBodyService} from '../../services/sheet-body-service/sheet-body.service';
import {GeneralComponent} from './structural/sheet-body/general/general.component';
import {AttributesComponent} from './reusable/attributes/attributes.component';
import {HitLocationComponent} from './reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './reusable/disadvantages/disadvantages.component';
import {ConfigService} from '../../services/config-service/config.service';
import {FatigueHitComponent} from './reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from './reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from './reusable/encumbrance/encumbrance.component';
import {PageReferenceComponent} from './reusable/page-reference/page-reference.component';

////////  SPECS  /////////////
describe('SheetComponent', function () {
  let de: DebugElement;
  let comp: SheetComponent;
  let fixture: ComponentFixture<SheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesDisadvantagesComponent,
        AdvantagesComponent,
        DisadvantagesComponent,
        EncumbranceComponent,
        EquipmentComponent,
        FatigueHitComponent,
        LiftingMovingComponent,
        PageReferenceComponent,
        SpellsComponent,
        SkillsComponent,
        SheetComponent,
        SheetHeaderComponent,
        SheetBodyComponent,
        GeneralComponent,
        PortraitComponent,
        IdentityComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        NotesComponent,
        AttributesComponent,
        HitLocationComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ConfigService,
        ModelReadService,
        JsonService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
        SheetBodyService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create a structural Sheet Component', () => expect(comp).toBeDefined());
});


