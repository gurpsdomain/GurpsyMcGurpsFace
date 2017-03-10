/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SheetBodyComponent} from './sheet-body.component';
import {TranslateModule} from 'ng2-translate';
import {NotesComponent} from '../../reusable-components/notes-component/notes.component';
import {AdvantagesComponent} from '../../reusable-components/advantages-component/advantages.component';
import {EquipmentComponent} from '../../reusable-components/equipment-component/equipment.component';
import {MagicComponent} from './magic-component/magic.component';
import {SkillsComponent} from '../../reusable-components/skills-component/skills.component';
import {GeneralComponent} from './general-component/general.component';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ThemeStorageDelegate} from '../../../../services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from '../../../../services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {SheetBodyService} from '../../../../services/sheet-body-service/sheet-body.service';
import {PointsComponent} from '../../reusable-components/points-component/points.component';
import {PortraitComponent} from '../../reusable-components/portrait-component/portrait.component';
import {DescriptionComponent} from '../../reusable-components/description-component/description.component';
import {AttributesComponent} from '../../reusable-components/attributes-component/attributes.component';
import {HitLocationComponent} from '../../reusable-components/hit-location-component/hit-location.component';

describe('SheetBodyComponent', () => {
  let component: SheetBodyComponent;
  let fixture: ComponentFixture<SheetBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SheetBodyComponent,
        GeneralComponent,
        AdvantagesComponent,
        EquipmentComponent,
        MagicComponent,
        NotesComponent,
        SkillsComponent,
        PointsComponent,
        PortraitComponent,
        DescriptionComponent,
        AttributesComponent,
        HitLocationComponent
      ],
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
