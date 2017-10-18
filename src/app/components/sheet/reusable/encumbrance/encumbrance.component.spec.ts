import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {EncumbranceComponent} from './encumbrance.component';
import {TranslateModule} from '@ngx-translate/core';
// tslint:disable-next-line max-line-length
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
import {HttpModule} from '@angular/http';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {WeightPipe} from '../../../../pipes/weight/weight.pipe';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';

describe('EncumbranceComponent', () => {
  let component: EncumbranceComponent;
  let fixture: ComponentFixture<EncumbranceComponent>;

  let modelService: SheetService;

  let sheet: Sheet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EncumbranceComponent,
        WeightPipe
      ],
      imports: [
        HttpModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        LoggingService,
        SheetService,
        SettingsStorageService,
        TemplateStorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncumbranceComponent);
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
