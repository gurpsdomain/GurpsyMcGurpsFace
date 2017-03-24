/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GeneralComponent} from './general.component';
import {TranslateModule} from 'ng2-translate';
import {PortraitComponent} from '../../../reusable-components/portrait-component/portrait.component';
import {PointsComponent} from '../../../reusable-components/points-component/points.component';
import {DescriptionComponent} from '../../../reusable-components/description-component/description.component';
import {ModelReadService} from '../../../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../../../services/json-service/json.service';
import {StorageService} from '../../../../../services/storage-service/storage.service';
// tslint:disable-next-line max-line-length
import {ConfigStorageDelegate} from '../../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {AttributesComponent} from '../../../reusable-components/attributes-component/attributes.component';
import {HitLocationComponent} from '../../../reusable-components/hit-location-component/hit-location.component';
import {FatigueHitComponent} from '../../../reusable-components/fatigue-hit-component/fatigue-hit.component';

describe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttributesComponent,
        DescriptionComponent,
        FatigueHitComponent,
        GeneralComponent,
        HitLocationComponent,
        PortraitComponent,
        PointsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelReadService,
        JsonService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a structural General Component', () => {
    expect(component).toBeTruthy();
  });
});