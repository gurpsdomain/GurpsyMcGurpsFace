/* tslint:disable:no-unused-variable */
import {PointsComponent} from './points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';

////////  SPECS  /////////////
describe('PointsComponent', function () {
  let component: PointsComponent;
  let fixture: ComponentFixture<PointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PointsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        LoggingService,
        ModelService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
