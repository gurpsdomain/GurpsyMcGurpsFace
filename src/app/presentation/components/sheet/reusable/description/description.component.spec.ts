/* tslint:disable:no-unused-variable */
import {DescriptionComponent} from './description.component';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {SheetService} from '../../../../../services/sheet/sheet.service';
import {Sheet} from '../../../../../models/sheet/sheet.model';
import {GurpsyMaterialModule} from '../../../../../modules/material.module';
import {SettingsService} from '../../../../../services/settings/settings.service';
import {SettingsRepository} from '../../../../../repositories/settings/settings.repository';
import {LoggingService} from '../../../../../services/logging/logging.service';
import {TemplateRepository} from '../../../../../repositories/template/template.repository';
import {SheetTemplate} from '../../../../../models/sheet-template/sheet-template.model';

describe('DescriptionComponent', function () {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  let modelService: SheetService;

  let sheet: Sheet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DescriptionComponent
      ],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        SettingsRepository,
        LoggingService,
        SheetService,
        TemplateRepository
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;

    modelService = TestBed.get(SheetService);

    const template = new SheetTemplate();
    sheet = new Sheet(template);

    spyOn(modelService, 'getSheet')
      .and.returnValue(Promise.resolve(sheet));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  })

  it('should have a sheet set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.sheet).toBe(sheet);
  }));
});
