/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GeneralComponent} from './general.component';
import {TranslateModule} from '@ngx-translate/core';
import {PortraitComponent} from '../../../reusable/portrait/portrait.component';
import {PointsComponent} from '../../../reusable/points/points.component';
import {DescriptionComponent} from '../../../reusable/description/description.component';
import {AttributesComponent} from '../../../reusable/attributes/attributes.component';
import {HitLocationComponent} from '../../../reusable/hit-location/hit-location.component';
import {FatigueHitComponent} from '../../../reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from '../../../reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from '../../../reusable/encumbrance/encumbrance.component';
import {GurpsyMaterialModule} from '../../../../../modules/material.module';
import {SheetService} from '../../../../../services/sheet/sheet.service';
import {SettingsService} from '../../../../../services/settings/settings.service';
import {LoggingService} from '../../../../../services/logging/logging.service';
import {SettingsRepository} from '../../../../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../../../../repositories/template/template.repository';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttributesComponent,
        DescriptionComponent,
        EncumbranceComponent,
        FatigueHitComponent,
        GeneralComponent,
        HitLocationComponent,
        LiftingMovingComponent,
        PortraitComponent,
        PointsComponent
      ],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SheetService,
        SettingsService,
        LoggingService,
        SettingsRepository,
        TemplateRepository
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

