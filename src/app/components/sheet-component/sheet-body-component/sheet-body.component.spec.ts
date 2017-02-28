/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SheetBodyComponent} from './sheet-body.component';
import {TranslateModule} from 'ng2-translate';
import {NotesComponent} from './notes-component/notes.component';
import {ModelReadService} from '../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../services/json-service/json.service';
import {StorageService} from '../../../services/storage-service/storage.service';
import {ThemeStorageDelegate} from '../../../services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from '../../../services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {SheetStorageDelegate} from '../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {AdvantagesComponent} from './advantages-component/advantages.component';
import {EquipmentComponent} from './equipment-component/equipment.component';
import {MagicComponent} from './magic-component/magic.component';
import {SkillsComponent} from './skills-component/skills.component';
import {SheetBodyService} from '../../../services/sheet-body-service/sheet-body.service';

describe('SheetBodyComponent', () => {
  let component: SheetBodyComponent;
  let fixture: ComponentFixture<SheetBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SheetBodyComponent,
        AdvantagesComponent,
        EquipmentComponent,
        MagicComponent,
        NotesComponent,
        SkillsComponent],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelReadService,
        JsonService,
        StorageService,
        ThemeStorageDelegate,
        LanguageStorageDelegate,
        SheetStorageDelegate,
        SheetBodyService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
