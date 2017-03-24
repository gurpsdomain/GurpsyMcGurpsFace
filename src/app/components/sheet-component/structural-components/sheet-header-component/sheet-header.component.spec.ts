/* tslint:disable:no-unused-variable */
import {SheetHeaderComponent} from './sheet-header.component';
import {PortraitComponent} from '../../reusable-components/portrait-component/portrait.component';
import {IdentityComponent} from '../../reusable-components/identity-component/identity.component';
import {PlayerInformationComponent} from '../../reusable-components/player-information-component/player-information.component';
import {DescriptionComponent} from '../../reusable-components/description-component/description.component';
import {PointsComponent} from '../../reusable-components/points-component/points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from 'ng2-translate';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';

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
        PointsComponent],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelReadService,
        JsonService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetHeaderComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create structural Sheet Header Component', () => expect(comp).toBeDefined());
});

