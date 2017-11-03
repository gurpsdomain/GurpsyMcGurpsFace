import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FatigueHitComponent} from './fatigue-hit.component';
import {TranslateModule} from '@ngx-translate/core';
import {SheetService} from '../../../../services/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {SettingsService} from '../../../../services/settings/settings.service';
import {LoggingService} from '../../../../services/logging/logging.service';
import {SettingsRepository} from '../../../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';

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
        SettingsRepository,
        TemplateRepository
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

    const template = new SheetTemplate();
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
