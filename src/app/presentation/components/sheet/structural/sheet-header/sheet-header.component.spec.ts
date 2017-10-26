/* tslint:disable:no-unused-variable */
import {SheetHeaderComponent} from './sheet-header.component';
import {PortraitComponent} from '../../reusable/portrait/portrait.component';
import {IdentityComponent} from '../../reusable/identity/identity.component';
import {PlayerInformationComponent} from '../../reusable/player-information/player-information.component';
import {DescriptionComponent} from '../../reusable/description/description.component';
import {PointsComponent} from '../../reusable/points/points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
// tslint:disable-next-line max-line-length
import {HttpModule} from '@angular/http';
import {GurpsyMaterialModule} from '../../../../../modules/material.module';
import {SettingsService} from '../../../../../services/settings/settings.service';
import {LoggingService} from '../../../../../services/logging/logging.service';
import {SheetService} from '../../../../../services/sheet/sheet.service';
import {SettingsRepository} from '../../../../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../../../../repositories/template/template.repository';
import {WeightDisplayComponent} from '../../../generic/weight-display/weight-display.component';

////////  SPECS  /////////////
describe('SheetHeaderComponent', function () {
  let de: DebugElement;
  let comp: SheetHeaderComponent;
  let fixture: ComponentFixture<SheetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DescriptionComponent,
        IdentityComponent,
        PlayerInformationComponent,
        PortraitComponent,
        PointsComponent,
        SheetHeaderComponent,
        WeightDisplayComponent
      ],
      imports: [
        GurpsyMaterialModule,
        HttpModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        LoggingService,
        SheetService,
        SettingsRepository,
        TemplateRepository,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetHeaderComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should be created', () => expect(comp).toBeDefined());
});


