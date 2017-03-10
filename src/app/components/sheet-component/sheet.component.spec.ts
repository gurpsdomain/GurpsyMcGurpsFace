import {SheetComponent} from './sheet.component';
import {SheetHeaderComponent} from './structural-components/sheet-header-component/sheet-header.component';
import {PortraitComponent} from './reusable-components/portrait-component/portrait.component';
import {IdentityComponent} from './reusable-components/identity-component/identity.component';
import {PlayerInformationComponent} from './reusable-components/player-information-component/player-information.component';
import {DescriptionComponent} from './reusable-components/description-component/description.component';
import {PointsComponent} from './reusable-components/points-component/points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from 'ng2-translate';
import {ModelReadService} from '../../services/model-read-service/model-read.service';
import {JsonService} from '../../services/json-service/json.service';
import {StorageService} from '../../services/storage-service/storage.service';
import {LanguageStorageDelegate} from '../../services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {ThemeStorageDelegate} from '../../services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {SheetStorageDelegate} from '../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SheetBodyComponent} from './structural-components/sheet-body-component/sheet-body.component';
import {NotesComponent} from './reusable-components/notes-component/notes.component';
import {AdvantagesComponent} from './reusable-components/advantages-component/advantages.component';
import {EquipmentComponent} from './reusable-components/equipment-component/equipment.component';
import {MagicComponent} from './structural-components/sheet-body-component/magic-component/magic.component';
import {SkillsComponent} from './reusable-components/skills-component/skills.component';
import {SheetBodyService} from '../../services/sheet-body-service/sheet-body.service';
import {GeneralComponent} from './structural-components/sheet-body-component/general-component/general.component';
import {AttributesComponent} from './reusable-components/attributes-component/attributes.component';

////////  SPECS  /////////////
describe('SheetComponent', function () {
  let de: DebugElement;
  let comp: SheetComponent;
  let fixture: ComponentFixture<SheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesComponent,
        EquipmentComponent,
        MagicComponent,
        SkillsComponent,
        SheetComponent,
        SheetHeaderComponent,
        SheetBodyComponent,
        GeneralComponent,
        PortraitComponent,
        IdentityComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        NotesComponent,
        AttributesComponent],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelReadService,
        JsonService,
        StorageService,
        ThemeStorageDelegate,
        SheetStorageDelegate,
        LanguageStorageDelegate,
        SheetBodyService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create the Sheet Component', () => expect(comp).toBeDefined());
});


