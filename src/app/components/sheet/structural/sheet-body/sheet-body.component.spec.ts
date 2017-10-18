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
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {SheetBodyService} from '../../../../services/front-end/sheet-body/sheet-body.service';
import {PointsComponent} from '../../reusable/points/points.component';
import {PortraitComponent} from '../../reusable/portrait/portrait.component';
import {DescriptionComponent} from '../../reusable/description/description.component';
import {AttributesComponent} from '../../reusable/attributes/attributes.component';
import {HitLocationComponent} from '../../reusable/hit-location/hit-location.component';
import {AdvantagesDisadvantagesComponent} from './advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from '../../reusable/disadvantages/disadvantages.component';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {FatigueHitComponent} from '../../reusable/fatigue-hit/fatigue-hit.component';
import {EncumbranceComponent} from '../../reusable/encumbrance/encumbrance.component';
import {LiftingMovingComponent} from '../../reusable/lifting-moving/lifting-moving.component';
import {PageReferenceComponent} from '../../../generic/page-reference/page-reference.component';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {WeightPipe} from '../../../../pipes/weight/weight.pipe';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';

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
        HitLocationComponent,
        WeightPipe
      ],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        SettingsStorageService,
        LoggingService,
        SheetService,
        SheetBodyService,
        TemplateStorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
