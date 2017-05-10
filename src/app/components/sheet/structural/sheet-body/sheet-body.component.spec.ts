/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SheetBodyComponent} from './sheet-body.component';
import {TranslateModule} from '@ngx-translate/core';
import {NotesComponent} from '../../reusable/notes/notes.component';
import {AdvantagesComponent} from '../../reusable/advantages/advantages.component';
import {EquipmentComponent} from '../../reusable/equipment/equipment.component';
import {SpellsComponent} from '../../reusable/spells/spells.component';
import {SkillsComponent} from '../../reusable/skills/skills.component';
import {GeneralComponent} from './general/general.component';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetBodyService} from '../../../../services/sheet-body-service/sheet-body.service';
import {PointsComponent} from '../../reusable/points/points.component';
import {PortraitComponent} from '../../reusable/portrait/portrait.component';
import {DescriptionComponent} from '../../reusable/description/description.component';
import {AttributesComponent} from '../../reusable/attributes/attributes.component';
import {HitLocationComponent} from '../../reusable/hit-location/hit-location.component';
import {AdvantagesDisadvantagesComponent} from './advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from '../../reusable/disadvantages/disadvantages.component';
import {ConfigService} from '../../../../services/config-service/config.service';
import {FatigueHitComponent} from '../../reusable/fatigue-hit/fatigue-hit.component';
import {EncumbranceComponent} from '../../reusable/encumbrance/encumbrance.component';
import {LiftingMovingComponent} from '../../reusable/lifting-moving/lifting-moving.component';
import {PageReferenceComponent} from '../../../generic/page-reference/page-reference.component';

describe('SheetBodyComponent', () => {
  let component: SheetBodyComponent;
  let fixture: ComponentFixture<SheetBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SheetBodyComponent,
        GeneralComponent,
        AdvantagesDisadvantagesComponent,
        AdvantagesComponent,
        DisadvantagesComponent,
        EncumbranceComponent,
        EquipmentComponent,
        FatigueHitComponent,
        LiftingMovingComponent,
        PageReferenceComponent,
        SpellsComponent,
        NotesComponent,
        SkillsComponent,
        PointsComponent,
        PortraitComponent,
        DescriptionComponent,
        AttributesComponent,
        HitLocationComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ConfigService,
        ConfigStorageDelegate,
        JsonService,
        OutputModelService,
        SheetBodyService,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a structural OutputSheet Body Component', () => {
    expect(component).toBeTruthy();
  });
});
