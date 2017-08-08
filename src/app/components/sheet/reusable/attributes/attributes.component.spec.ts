/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AttributesComponent} from './attributes.component';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
import {TemplateStorageDelegate} from '../../../../services/back-end/storage/delegates/template-storage-delegate/template-storage-delegate';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {TranslateModule} from '@ngx-translate/core';
import {HttpModule} from '@angular/http';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';
import {Sheet} from '../../../../models/sheet/model/sheet.model';
import {Template} from '../../../../models/sheet/template/template.model';

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
        SettingsStorageDelegate,
        LoggingService,
        SheetService,
        TemplateStorageDelegate,
        StorageService
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
