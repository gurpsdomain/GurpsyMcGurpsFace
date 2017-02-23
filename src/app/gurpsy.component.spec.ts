/* tslint:disable:no-unused-variable */
import {TestBed, async} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {FormsModule} from '@angular/forms';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet-component/sheet.component';
import {SheetHeaderComponent} from './components/sheet-component/sheet-header-component/sheet-header.component';
import {PortraitComponent} from './components/sheet-component/sheet-header-component/portrait-component/portrait.component';
import {IdentityComponent} from './components/sheet-component/sheet-header-component/identity-component/identity.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet-component/sheet-header-component/player-information-component/player-information.component';
import {DescriptionComponent} from './components/sheet-component/sheet-header-component/description-component/description.component';
import {PointsComponent} from './components/sheet-component/sheet-header-component/points-component/points.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';
import {StorageService} from './services/storage-service/storage.service';
import {ThemeService} from './services/theme-service/theme.service';
import {LanguagesService} from './services/languages-service/languages.service';
import {ModelReadService} from './services/model-read-service/model-read.service';
import {JsonService} from './services/json-service/json.service';
import {LanguageStorageDelegate} from './services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {ThemeStorageDelegate} from './services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {SheetStorageDelegate} from './services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SheetBodyComponent} from './components/sheet-component/sheet-body-component/sheet-body.component';
import {NotesComponent} from './components/sheet-component/sheet-body-component/notes-component/notes.component';

describe('GurpsyComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GurpsyComponent,
        SheetComponent,
        SheetHeaderComponent,
        SheetBodyComponent,
        PortraitComponent,
        IdentityComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        SideNavigationComponent,
        NotesComponent
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
        JsonService
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(GurpsyComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
