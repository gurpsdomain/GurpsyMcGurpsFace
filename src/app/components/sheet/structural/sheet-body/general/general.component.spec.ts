/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GeneralComponent} from './general.component';
import {TranslateModule} from '@ngx-translate/core';
import {PortraitComponent} from '../../../reusable/portrait/portrait.component';
import {PointsComponent} from '../../../reusable/points/points.component';
import {DescriptionComponent} from '../../../reusable/description/description.component';
import {ModelService} from '../../../../../services/front-end/model/model.service';
import {StorageService} from '../../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {AttributesComponent} from '../../../reusable/attributes/attributes.component';
import {HitLocationComponent} from '../../../reusable/hit-location/hit-location.component';
import {FatigueHitComponent} from '../../../reusable/fatigue-hit/fatigue-hit.component';
import {LiftingMovingComponent} from '../../../reusable/lifting-moving/lifting-moving.component';
import {EncumbranceComponent} from '../../../reusable/encumbrance/encumbrance.component';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {SettingsService} from '../../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../../services/back-end/logging/logging.service';
import {ModelTransformerService} from '../../../../../services/back-end/model-transformer/model-transformer.service';

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
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        ModelService,
        ModelTransformerService,
        SettingsService,
        LoggingService,
        StorageService,
        SettingsStorageDelegate,
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

