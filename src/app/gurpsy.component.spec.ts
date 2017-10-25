/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './presentation/components/sheet/sheet.component';
import {SheetHeaderComponent} from './presentation/components/sheet/structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './presentation/components/sheet/reusable/portrait/portrait.component';
import {IdentityComponent} from './presentation/components/sheet/reusable/identity/identity.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './presentation/components/sheet/reusable/player-information/player-information.component';
import {DescriptionComponent} from './presentation/components/sheet/reusable/description/description.component';
import {PointsComponent} from './presentation/components/sheet/reusable/points/points.component';
import {SideNavigationComponent} from './presentation/components/side-navigation/side-navigation.component';
import {SettingsService} from './services/settings/settings.service';
import {SettingsRepository} from './repositories/settings/settings.repository';
import {TemplateRepository} from './repositories/template/template.repository';
import {SheetBodyComponent} from './presentation/components/sheet/structural/sheet-body/sheet-body.component';
import {NotesComponent} from './presentation/components/sheet/reusable/notes/notes.component';
import {AdvantagesComponent} from './presentation/components/sheet/reusable/advantages/advantages.component';
import {EquipmentComponent} from './presentation/components/sheet/reusable/equipment/equipment.component';
import {SpellsComponent} from './presentation/components/sheet/reusable/spells/spells.component';
import {SkillsComponent} from './presentation/components/sheet/reusable/skills/skills.component';
import {SheetBodyService} from './services/sheet-body/sheet-body.service';
import {GeneralComponent} from './presentation/components/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './presentation/components/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './presentation/components/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './presentation/components/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './presentation/components/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './presentation/components/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {LoggingService} from './services/logging/logging.service';
import {EncumbranceComponent} from './presentation/components/sheet/reusable/encumbrance/encumbrance.component';
import {LiftingMovingComponent} from './presentation/components/sheet/reusable/lifting-moving/lifting-moving.component';
import {PageReferenceComponent} from './presentation/components/generic/page-reference/page-reference.component';
import {BookViewerComponent} from './presentation/components/book-viewer/book-viewer.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {FileFormComponent} from './presentation/components/form/file/file.form.component';
import {GurpsyMaterialModule} from './modules/material.module';
import {BaseRequestOptions, Http, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {PageReferenceService} from './services/page-reference/page-reference.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SheetTemplate} from './models/sheet-template/sheet-template.model';
import {Sheet} from './models/sheet/sheet.model';
import {Title} from '@angular/platform-browser';
import {SheetService} from './services/sheet/sheet.service';
import {GurpsyAngularModule} from './modules/angular.module';

describe('GurpsyComponent', () => {
  let component: GurpsyComponent;
  let fixture: ComponentFixture<GurpsyComponent>;

  let modelService: SheetService;
  let titleService: Title;

  const CHARACTER_NAME = 'Dai Blackthorn';

  let template: SheetTemplate;
  let sheet: Sheet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesDisadvantagesComponent,
        AdvantagesComponent,
        AttributesComponent,
        DescriptionComponent,
        DisadvantagesComponent,
        EncumbranceComponent,
        EquipmentComponent,
        FatigueHitComponent,
        GeneralComponent,
        GurpsyComponent,
        HitLocationComponent,
        IdentityComponent,
        BookViewerComponent,
        LiftingMovingComponent,
        NotesComponent,
        PageReferenceComponent,
        PortraitComponent,
        PlayerInformationComponent,
        PointsComponent,
        SideNavigationComponent,
        SheetComponent,
        SheetHeaderComponent,
        SheetBodyComponent,
        SpellsComponent,
        SkillsComponent,
        PdfViewerComponent,
        FileFormComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        GurpsyAngularModule,
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        SettingsService,
        SettingsRepository,
        TranslateService,
        LoggingService,
        PageReferenceService,
        TemplateRepository,
        SheetService,
        SheetBodyService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurpsyComponent);
    component = fixture.componentInstance;

    modelService = TestBed.get(SheetService);
    titleService = TestBed.get(Title);

    template = new SheetTemplate();
    template.lastModified = new Date();
    sheet = new Sheet(template);
    sheet.metaData.identity.name = CHARACTER_NAME;

    spyOn(modelService, 'getSheet')
      .and.returnValue(Promise.resolve(sheet));
    spyOn(modelService, 'getTemplate')
      .and.returnValue(Promise.resolve(template));
    spyOn(titleService, 'setTitle');
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a template set after component is initialized', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.template).toBe(template);
  }));

  it('should have a sheet set after component is initialised', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.sheet).toBe(sheet);
  }));

  it('should have called setTitle() on the TitleService after the Sheet has been set on ngOnInit', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(titleService.setTitle).toHaveBeenCalledWith(CHARACTER_NAME);
  }));
});
