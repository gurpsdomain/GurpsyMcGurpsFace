import {SheetComponent} from './sheet.component';
import {SheetHeaderComponent} from './sheet-header-component/sheet-header.component';
import {PortraitComponent} from './sheet-header-component/portrait-component/portrait.component';
import {IdentityComponent} from './sheet-header-component/identity-component/identity.component';
import {PlayerInformationComponent} from './sheet-header-component/player-information-component/player-information.component';
import {DescriptionComponent} from './sheet-header-component/description-component/description.component';
import {PointsComponent} from './sheet-header-component/points-component/points.component';
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
import {SheetBodyComponent} from './sheet-body-component/sheet-body.component';
import {NotesComponent} from './sheet-body-component/notes-component/notes.component';
import {AdvantagesComponent} from './sheet-body-component/advantages-component/advantages.component';
import {EquipmentComponent} from './sheet-body-component/equipment-component/equipment.component';
import {MagicComponent} from './sheet-body-component/magic-component/magic.component';
import {SkillsComponent} from './sheet-body-component/skills-component/skills.component';

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
        PortraitComponent,
        IdentityComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        NotesComponent],
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


