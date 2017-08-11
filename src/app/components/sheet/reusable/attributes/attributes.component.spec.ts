/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AttributesComponent} from './attributes.component';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {TranslateModule} from '@ngx-translate/core';
import {HttpModule} from '@angular/http';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/model/sheet.model';
import {TemplateDM} from '../../../../models/sheet/template/template.model';

describe('AttributesComponent', () => {
  let component: AttributesComponent;
  let fixture: ComponentFixture<AttributesComponent>;

  let modelService: SheetService;

  let sheet: Sheet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttributesComponent],
      providers: [
        SettingsService,
        SettingsStorageService,
        LoggingService,
        SheetService,
        TemplateStorageService
      ],
      imports: [
        HttpModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesComponent);
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
