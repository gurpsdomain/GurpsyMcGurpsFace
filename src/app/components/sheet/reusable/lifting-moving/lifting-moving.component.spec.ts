import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LiftingMovingComponent} from './lifting-moving.component';
import {TranslateModule} from '@ngx-translate/core';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';

describe('LiftingMovingComponent', () => {
  let component: LiftingMovingComponent;
  let fixture: ComponentFixture<LiftingMovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiftingMovingComponent],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        LoggingService,
        SheetService,
        StorageService,
        SettingsStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftingMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
