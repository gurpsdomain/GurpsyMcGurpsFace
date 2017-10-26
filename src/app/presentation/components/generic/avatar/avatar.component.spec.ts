import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AvatarComponent} from './avatar.component';
import {SheetService} from '../../../../services/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {SettingsRepository} from '../../../../repositories/settings/settings.repository';
import {LoggingService} from '../../../../services/logging/logging.service';
import {SettingsService} from '../../../../services/settings/settings.service';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  let modelService: SheetService;

  let sheet: Sheet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent],
      providers: [
        LoggingService,
        SheetService,
        TemplateRepository
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
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
