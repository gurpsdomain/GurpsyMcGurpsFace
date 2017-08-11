/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GeneralComponent} from './general.component';
import {TranslateModule} from '@ngx-translate/core';
import {PortraitComponent} from '../../../reusable/portrait/portrait.component';
import {PointsComponent} from '../../../reusable/points/points.component';
import {DescriptionComponent} from '../../../reusable/description/description.component';
// tslint:disable-next-line max-line-length
import {SettingsStorageService} from '../../../../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../../../../services/back-end/template-storage/template-storage.service';
import {AttributesComponent} from '../../../reusable/attributes/attributes.component';
import {HitLocationComponent} from '../../../reusable/hit-location/hit-location.component';
import {FatigueHitComponent} from '../../../reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from '../../../reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from '../../../reusable/encumbrance/encumbrance.component';
import {SettingsService} from '../../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../../services/back-end/logging/logging.service';
import {WeightPipe} from '../../../../../pipes/weight.pipe';
import {GurpsyMaterialModule} from '../../../../../modules/material.module';
import {SheetService} from '../../../../../services/front-end/sheet/sheet.service';

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
        PointsComponent,
        WeightPipe
      ],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SheetService,
        SettingsService,
        LoggingService,
        SettingsStorageService,
        TemplateStorageService
      ]
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

