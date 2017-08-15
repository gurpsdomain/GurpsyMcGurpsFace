/* tslint:disable:no-unused-variable */
import {IdentityComponent} from './identity.component';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
// tslint:disable-next-line max-line-length
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {By} from '@angular/platform-browser';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';

describe('IdentityComponent', function () {
  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;

  let modelService: SheetService;

  let sheet: Sheet;
  let template: SheetTemplate;

  const CHARACTER_NAME = 'Dai Blackthorn';
  const CHARACTER_NAME_SELECTOR = '.name';
  const CHARACTER_TITLE = 'Captain';
  const CHARACTER_TITLE_SELECTOR = '.title';
  const CHARACTER_RELIGION = 'Thaoist';
  const CHARACTER_RELIGION_SELECTOR = '.religion';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdentityComponent
      ],
      imports: [
        GurpsyMaterialModule,
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
    fixture = TestBed.createComponent(IdentityComponent);
    component = fixture.componentInstance;

    modelService = TestBed.get(SheetService);

    template = new SheetTemplate();
    sheet = new Sheet(template);
    sheet.metaData.identity.name = CHARACTER_NAME;
    sheet.metaData.identity.title = CHARACTER_TITLE;
    sheet.metaData.identity.religion = CHARACTER_RELIGION;

    spyOn(modelService, 'getSheet')
      .and.returnValue(Promise.resolve(sheet));
    spyOn(modelService, 'getTemplate')
      .and.returnValue(Promise.resolve(template));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct name from the sheet sheet', () => {
    const de = fixture.debugElement.query(By.css(CHARACTER_NAME_SELECTOR));
    const el = de.nativeElement;

    component.sheet = sheet;

    fixture.detectChanges();
    expect(el.textContent.trim()).toBe(CHARACTER_NAME);
  });

  it('should show the correct title from the sheet sheet', () => {
    const de = fixture.debugElement.query(By.css(CHARACTER_TITLE_SELECTOR));
    const el = de.nativeElement;

    component.sheet = sheet;

    fixture.detectChanges();
    expect(el.textContent.trim()).toBe(CHARACTER_TITLE);
  });

  it('should show the correct religion from the sheet sheet', () => {
    const de = fixture.debugElement.query(By.css(CHARACTER_RELIGION_SELECTOR));
    const el = de.nativeElement;

    component.sheet = sheet;

    fixture.detectChanges();
    expect(el.textContent.trim()).toBe(CHARACTER_RELIGION);
  });

  it('should have a template set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.template).toBe(template);
  }));

  it('should have a sheet set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.sheet).toBe(sheet);
  }));
});
