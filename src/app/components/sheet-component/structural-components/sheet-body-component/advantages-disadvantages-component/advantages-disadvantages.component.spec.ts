/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdvantagesDisadvantagesComponent} from './advantages-disadvantages.component';
import {TranslateModule} from 'ng2-translate';
import {AdvantagesComponent} from '../../../reusable-components/advantages-component/advantages.component';
import {DisadvantagesComponent} from '../../../reusable-components/disadvantages-component/disadvantages.component';
import {ModelReadService} from '../../../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../../../services/json-service/json.service';
import {StorageService} from '../../../../../services/storage-service/storage.service';
import {ThemeStorageDelegate} from '../../../../../services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
// tslint:disable-next-line max-line-length
import {LanguageStorageDelegate} from '../../../../../services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {SheetStorageDelegate} from '../../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';

describe('AdvantagesComponent', () => {
  let component: AdvantagesDisadvantagesComponent;
  let fixture: ComponentFixture<AdvantagesDisadvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesDisadvantagesComponent,
        AdvantagesComponent,
        DisadvantagesComponent
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
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesDisadvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a Advantages/Disadvantages Structural Component', () => {
    expect(component).toBeTruthy();
  });
});
