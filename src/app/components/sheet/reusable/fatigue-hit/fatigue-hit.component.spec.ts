import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FatigueHitComponent} from './fatigue-hit.component';
// tslint:disable-next-line max-line-length
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/model/sheet.model';
import {TemplateDM} from '../../../../models/sheet/template/template.model';

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
        SettingsStorageService,
        TemplateStorageService
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

    const template = new TemplateDM();
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
