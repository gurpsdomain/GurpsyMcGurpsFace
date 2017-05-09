/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GeneralComponent} from './general.component';
import {TranslateModule} from 'ng2-translate';
import {PortraitComponent} from '../../../reusable/portrait/portrait.component';
import {PointsComponent} from '../../../reusable/points/points.component';
import {DescriptionComponent} from '../../../reusable/description/description.component';
import {OutputModelService} from '../../../../../services/model-read-service/output-model.service';
import {JsonService} from '../../../../../services/json-service/json.service';
import {StorageService} from '../../../../../services/storage-service/storage.service';
// tslint:disable-next-line max-line-length
import {ConfigStorageDelegate} from '../../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {AttributesComponent} from '../../../reusable/attributes/attributes.component';
import {HitLocationComponent} from '../../../reusable/hit-location/hit-location.component';
import {FatigueHitComponent} from '../../../reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from '../../../reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from '../../../reusable/encumbrance/encumbrance.component';

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
        TranslateModule.forRoot()
      ],
      providers: [
        OutputModelService,
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
