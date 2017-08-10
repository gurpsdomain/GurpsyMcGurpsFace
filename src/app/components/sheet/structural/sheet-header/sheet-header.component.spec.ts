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
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {TemplateStorageService} from '../../../../services/back-end/storage/delegates/template-storage/template-storage.service';
import {HttpModule} from '@angular/http';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {WeightPipe} from '../../../../pipes/weight.pipe';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';

////////  SPECS  /////////////
describe('SheetHeaderComponent', function () {
  let de: DebugElement;
  let comp: SheetHeaderComponent;
  let fixture: ComponentFixture<SheetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SheetHeaderComponent,
        PortraitComponent,
        IdentityComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        WeightPipe],
      imports: [
        GurpsyMaterialModule,
        HttpModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        LoggingService,
        SheetService,
        StorageService,
        SettingsStorageDelegate,
        TemplateStorageService,
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


