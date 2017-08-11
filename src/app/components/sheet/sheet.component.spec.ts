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
import {TranslateModule} from '@ngx-translate/core';
// tslint:disable-next-line max-line-length
import {SettingsStorageService} from '../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../services/back-end/template-storage/template-storage.service';
import {SheetBodyComponent} from './structural/sheet-body/sheet-body.component';
import {NotesComponent} from './reusable/notes/notes.component';
import {AdvantagesComponent} from './reusable/advantages/advantages.component';
import {EquipmentComponent} from './reusable/equipment/equipment.component';
import {SpellsComponent} from './reusable/spells/spells.component';
import {SkillsComponent} from './reusable/skills/skills.component';
import {SheetBodyService} from '../../services/front-end/sheet-body/sheet-body.service';
import {GeneralComponent} from './structural/sheet-body/general/general.component';
import {AttributesComponent} from './reusable/attributes/attributes.component';
import {HitLocationComponent} from './reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './reusable/disadvantages/disadvantages.component';
import {SettingsService} from '../../services/front-end/settings/settings.service';
import {FatigueHitComponent} from './reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from './reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from './reusable/encumbrance/encumbrance.component';
import {PageReferenceComponent} from '../generic/page-reference/page-reference.component';
import {HttpModule} from '@angular/http';
import {LoggingService} from '../../services/back-end/logging/logging.service';
import {WeightPipe} from '../../pipes/weight.pipe';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {SheetService} from '../../services/front-end/sheet/sheet.service';

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
        HitLocationComponent,
        WeightPipe
      ],
      imports: [
        GurpsyMaterialModule,
        HttpModule,
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SettingsStorageService,
        TemplateStorageService,
        SheetBodyService,
        SettingsService,
        SheetService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should be created', () => expect(comp).toBeDefined());
});


