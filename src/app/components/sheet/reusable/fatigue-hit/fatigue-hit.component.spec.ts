import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FatigueHitComponent} from './fatigue-hit.component';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';

describe('FatigueHitComponent', () => {
  let component: FatigueHitComponent;
  let fixture: ComponentFixture<FatigueHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FatigueHitComponent],
      providers: [
        SettingsService,
        LoggingService,
        SheetService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatigueHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
