/* tslint:disable:no-unused-variable */
import {TestBed, async} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {FormsModule} from '@angular/forms';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet-component/sheet.component';
// tslint:disable-next-line max-line-length
import {SheetHeaderComponent} from './components/sheet-component/structural-components/sheet-header-component/sheet-header.component';
import {PortraitComponent} from './components/sheet-component/reusable-components/portrait-component/portrait.component';
import {IdentityComponent} from './components/sheet-component/reusable-components/identity-component/identity.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet-component/reusable-components/player-information-component/player-information.component';
import {DescriptionComponent} from './components/sheet-component/reusable-components/description-component/description.component';
import {PointsComponent} from './components/sheet-component/reusable-components/points-component/points.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';
import {StorageService} from './services/storage-service/storage.service';
import {ThemeService} from './services/theme-service/theme.service';
import {LanguagesService} from './services/languages-service/languages.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {JsonService} from './services/json-service/json.service';
import {LanguageStorageDelegate} from './services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {ThemeStorageDelegate} from './services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {SheetStorageDelegate} from './services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SheetBodyComponent} from './components/sheet-component/structural-components/sheet-body-component/sheet-body.component';
import {NotesComponent} from './components/sheet-component/reusable-components/notes-component/notes.component';
import {AdvantagesComponent} from './components/sheet-component/reusable-components/advantages-component/advantages.component';
import {EquipmentComponent} from './components/sheet-component/reusable-components/equipment-component/equipment.component';
import {MagicComponent} from './components/sheet-component/structural-components/sheet-body-component/magic-component/magic.component';
import {SkillsComponent} from './components/sheet-component/reusable-components/skills-component/skills.component';
import {SheetBodyService} from './services/sheet-body-service/sheet-body.service';
// tslint:disable-next-line max-line-length
import {GeneralComponent} from './components/sheet-component/structural-components/sheet-body-component/general-component/general.component';
import {AttributesComponent} from './components/sheet-component/reusable-components/attributes-component/attributes.component';

describe('GurpsyComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesComponent,
        EquipmentComponent,
        MagicComponent,
        SkillsComponent,
        GurpsyComponent,
        SheetComponent,
        SheetHeaderComponent,
        GeneralComponent,
        SheetBodyComponent,
        PortraitComponent,
        IdentityComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        SideNavigationComponent,
        NotesComponent,
        AttributesComponent
      ],
      imports: [
        FormsModule,
        MaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        ThemeService,
        LanguagesService,
        StorageService,
        ThemeStorageDelegate,
        SheetStorageDelegate,
        LanguageStorageDelegate,
        ModelReadService,
        JsonService,
        SheetBodyService
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(GurpsyComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
