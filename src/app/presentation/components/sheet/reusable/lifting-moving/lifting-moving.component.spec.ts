import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {LiftingMovingComponent} from './lifting-moving.component';
import {TranslateModule} from '@ngx-translate/core';
import {SheetService} from '../../../../../services/sheet/sheet.service';
import {Sheet} from '../../../../../models/sheet/sheet.model';
import {SettingsService} from '../../../../../services/settings/settings.service';
import {LoggingService} from '../../../../../services/logging/logging.service';
import {SettingsRepository} from '../../../../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../../../../repositories/template/template.repository';
import {SheetTemplate} from '../../../../../models/sheet-template/sheet-template.model';

describe('LiftingMovingComponent', () => {
  let component: LiftingMovingComponent;
  let fixture: ComponentFixture<LiftingMovingComponent>;

  let modelService: SheetService;

  let sheet: Sheet;

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
        SettingsRepository,
        TemplateRepository
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftingMovingComponent);
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
