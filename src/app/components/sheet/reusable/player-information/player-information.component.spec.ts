/* tslint:disable:no-unused-variable */
import {PlayerInformationComponent} from './player-information.component';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../../../services/back-end/template-storage/template-storage.service';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {Sheet} from '../../../../models/sheet/sheet.model';
import {SheetTemplate} from '../../../../models/sheet-template/sheet-template.model';
import {By} from '@angular/platform-browser';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';

describe('PlayerInformationComponent', function () {
  let component: PlayerInformationComponent;
  let fixture: ComponentFixture<PlayerInformationComponent>;

  let modelService: SheetService;

  let template: SheetTemplate;
  let initialSheet: Sheet;
  let modifiedSheet: Sheet;

  const PLAYER = 'Daan van Berkel';
  const PLAYER_SELECTOR = '.player';
  const CAMPAIGN = 'Paul\'s total party kill';
  const CAMPAIGN_SELECTOR = '.campaign';
  const CREATED_ON = new Date();
  const LAST_MODIFIED = new Date();
  const LAST_MODIFIED_SELECTOR = '.lastModified';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerInformationComponent
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
    fixture = TestBed.createComponent(PlayerInformationComponent);
    component = fixture.componentInstance;

    modelService = TestBed.get(SheetService);

    template = new SheetTemplate();
    initialSheet = new Sheet(template);
    initialSheet.metaData.playerInformation.player = PLAYER;
    initialSheet.metaData.playerInformation.campaign = CAMPAIGN;
    initialSheet.metaData.playerInformation.createdOn = CREATED_ON;
    initialSheet.metaData.playerInformation.lastModified = undefined;

    template = new SheetTemplate();
    modifiedSheet = new Sheet(template);
    modifiedSheet.metaData.playerInformation.player = PLAYER;
    modifiedSheet.metaData.playerInformation.campaign = CAMPAIGN;
    modifiedSheet.metaData.playerInformation.createdOn = CREATED_ON;
    modifiedSheet.metaData.playerInformation.lastModified = LAST_MODIFIED;

    spyOn(modelService, 'getSheet')
      .and.returnValue(Promise.resolve(initialSheet));
    spyOn(modelService, 'getTemplate')
      .and.returnValue(Promise.resolve(template));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct player from the sheet', () => {
    const de = fixture.debugElement.query(By.css(PLAYER_SELECTOR));
    const el = de.nativeElement;

    component.sheet = initialSheet;

    fixture.detectChanges();
    expect(el.textContent.trim()).toBe(PLAYER);
  });

  it('should show the correct campaign from the sheet', () => {
    const de = fixture.debugElement.query(By.css(CAMPAIGN_SELECTOR));
    const el = de.nativeElement;

    component.sheet = initialSheet;

    fixture.detectChanges();
    expect(el.textContent.trim()).toBe(CAMPAIGN);
  });

  it('should show the correct lastModified from the sheet', () => {
    component.sheet = modifiedSheet;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css(LAST_MODIFIED_SELECTOR));
    const el = de.nativeElement;

    expect(new Date(el.textContent.trim()).getDate()).toBe(LAST_MODIFIED.getDate());
  });

  it('should have a template set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.template).toBe(template);
  }));

  it('should have an initialSheet set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.sheet).toBe(initialSheet);
  }));
});
