/* tslint:disable:no-unused-variable */
import {IdentityComponent} from './identity.component';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {By} from '@angular/platform-browser';
import {Template} from '../../../../models/sheet/template/template.model';
import {Sheet} from '../../../../models/sheet/model/sheet.model';

describe('IdentityComponent', function () {
  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;

  let modelService: ModelService;

  let template: Template;
  let sheet: Sheet;

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
        ModelService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityComponent);
    component = fixture.componentInstance;

    modelService = fixture.debugElement.injector.get(ModelService);

    template = new Template();
    sheet = new Sheet(template);
    sheet.metaData.identity.name = CHARACTER_NAME;
    sheet.metaData.identity.title = CHARACTER_TITLE;
    sheet.metaData.identity.religion = CHARACTER_RELIGION;

    spyOn(modelService, 'getModel')
      .and.returnValue(Promise.resolve(sheet));
    spyOn(modelService, 'getTemplate')
      .and.returnValue(Promise.resolve(template));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct name from the sheet model', () => {
    const de = fixture.debugElement.query(By.css(CHARACTER_NAME_SELECTOR));
    const el = de.nativeElement;

    component.model = sheet;

    fixture.detectChanges();
    expect(el.textContent.trim()).toBe(CHARACTER_NAME);
  });

  it('should show the correct title from the sheet model', () => {
    const de = fixture.debugElement.query(By.css(CHARACTER_TITLE_SELECTOR));
    const el = de.nativeElement;

    component.model = sheet;

    fixture.detectChanges();
    expect(el.textContent.trim()).toBe(CHARACTER_TITLE);
  });

  it('should show the correct religion from the sheet model', () => {
    const de = fixture.debugElement.query(By.css(CHARACTER_RELIGION_SELECTOR));
    const el = de.nativeElement;

    component.model = sheet;

    fixture.detectChanges();
    expect(el.textContent.trim()).toBe(CHARACTER_RELIGION);
  });

  it('should have a template set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.template).toBe(template);
  }));

  it('should have a model set after component is initialised', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.model).toBe(sheet);
  }));
});
