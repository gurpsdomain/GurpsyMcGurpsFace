/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './presentation/sheet/sheet.component';
import {SheetHeaderComponent} from './presentation/sheet/structural/sheet-header/sheet-header.component';
import {PortraitComponent} from './presentation/sheet/reusable/portrait/portrait.component';
import {IdentityComponent} from './presentation/sheet/reusable/identity/identity.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './presentation/sheet/reusable/player-information/player-information.component';
import {DescriptionComponent} from './presentation/sheet/reusable/description/description.component';
import {PointsComponent} from './presentation/sheet/reusable/points/points.component';
import {SideNavigationComponent} from './presentation/components/side-navigation/side-navigation.component';
import {SettingsService} from './services/settings/settings.service';
import {SettingsRepository} from './repositories/settings/settings.repository';
import {TemplateRepository} from './repositories/template/template.repository';
import {NotesComponent} from './presentation/sheet/reusable/notes/notes.component';
import {AdvantagesComponent} from './presentation/sheet/reusable/advantages/advantages.component';
import {EquipmentComponent} from './presentation/sheet/reusable/equipment/equipment.component';
import {SpellsComponent} from './presentation/sheet/reusable/spells/spells.component';
import {SkillsComponent} from './presentation/sheet/reusable/skills/skills.component';
import {GeneralComponent} from './presentation/sheet/structural/sheet-body/general/general.component';
import {AttributesComponent} from './presentation/sheet/reusable/attributes/attributes.component';
import {HitLocationComponent} from './presentation/sheet/reusable/hit-location/hit-location.component';
// tslint:disable-next-line max-line-length
import {AdvantagesDisadvantagesComponent} from './presentation/sheet/structural/sheet-body/advantages-disadvantages/advantages-disadvantages.component';
import {DisadvantagesComponent} from './presentation/sheet/reusable/disadvantages/disadvantages.component';
import {FatigueHitComponent} from './presentation/sheet/reusable/fatigue-hit/fatigue-hit.component';
import {LoggingService} from './services/logging/logging.service';
import {EncumbranceComponent} from './presentation/sheet/reusable/encumbrance/encumbrance.component';
import {LiftingMovingComponent} from './presentation/sheet/reusable/lifting-moving/lifting-moving.component';
import {PageReferenceComponent} from './presentation/components/generic/page-reference/page-reference.component';
import {BookViewerComponent} from './presentation/components/book-viewer/book-viewer.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {FileFormComponent} from './presentation/components/form/file/file.form.component';
import {GurpsyMaterialModule} from './modules/material.module';
import {PageReferenceService} from './services/page-reference/page-reference.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SheetTemplate} from './models/sheet-template/sheet-template.model';
import {Sheet} from './models/sheet/sheet.model';
import {Title} from '@angular/platform-browser';
import {SheetService} from './services/sheet/sheet.service';
import {GurpsyAngularModule} from './modules/angular.module';
import {LibraryService} from './services/library/library.service';

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
        SpellsComponent,
        SkillsComponent,
        FileFormComponent
      ],
      imports: [
        GurpsyAngularModule,
        GurpsyMaterialModule,
        PdfViewerModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        SettingsRepository,
        TranslateService,
        LibraryService,
        LoggingService,
        PageReferenceService,
        TemplateRepository,
        SheetService
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
});
