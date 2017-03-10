/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HitLocationComponent} from './hit-location.component';
import {TranslateModule} from 'ng2-translate';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ThemeStorageDelegate} from '../../../../services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {LanguageStorageDelegate} from '../../../../services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';

describe('HitLocationComponent', () => {
  let component: HitLocationComponent;
  let fixture: ComponentFixture<HitLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HitLocationComponent],
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
    fixture = TestBed.createComponent(HitLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
