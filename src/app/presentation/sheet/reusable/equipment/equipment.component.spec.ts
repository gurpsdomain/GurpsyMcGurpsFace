import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {EquipmentComponent} from './equipment.component';
import {TranslateModule} from '@ngx-translate/core';
import {SheetService} from '../../../../services/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {PageReferenceComponent} from '../../../components/generic/page-reference/page-reference.component';
import {SettingsService} from '../../../../services/settings/settings.service';
import {LoggingService} from '../../../../services/logging/logging.service';
import {SettingsRepository} from '../../../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {Template} from '../../../../models/template/template.model';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;

  let modelService: SheetService;

  let sheet: Sheet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EquipmentComponent,
        PageReferenceComponent
      ],
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
    fixture = TestBed.createComponent(EquipmentComponent);
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
