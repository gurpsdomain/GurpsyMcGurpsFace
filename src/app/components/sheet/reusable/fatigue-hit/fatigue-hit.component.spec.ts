import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FatigueHitComponent} from './fatigue-hit.component';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {TemplateStorageDelegate} from '../../../../services/back-end/storage/delegates/template-storage-delegate/template-storage-delegate';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/model/sheet.model';
import {Template} from '../../../../models/sheet/template/template.model';

describe('FatigueHitComponent', () => {
  let component: FatigueHitComponent;
  let fixture: ComponentFixture<FatigueHitComponent>;

  let modelService: SheetService;

  let sheet: Sheet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FatigueHitComponent],
      providers: [
        SettingsService,
        LoggingService,
        SheetService,
        SettingsStorageDelegate,
        TemplateStorageDelegate,
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

    modelService = TestBed.get(SheetService);

    const template = new Template();
    sheet = new Sheet(template);

    spyOn(modelService, 'getSheet')
      .and.returnValue(Promise.resolve(sheet));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sheet set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.sheet).toBe(sheet);
  }));
});
