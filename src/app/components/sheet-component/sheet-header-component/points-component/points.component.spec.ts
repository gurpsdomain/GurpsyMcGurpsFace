/* tslint:disable:no-unused-variable */
import {PointsComponent} from './points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from 'ng2-translate';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {LanguageStorageDelegate} from '../../../../services/storage-service/delegates/language-storage-delegate/language-storage-delegate';
import {ThemeStorageDelegate} from '../../../../services/storage-service/delegates/theme-storage-delegate/theme-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';

////////  SPECS  /////////////
describe('PointsComponent', function () {
  let de: DebugElement;
  let comp: PointsComponent;
  let fixture: ComponentFixture<PointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PointsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelReadService,
        JsonService,
        ThemeStorageDelegate,
        SheetStorageDelegate,
        LanguageStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create Points component', () => expect(comp).toBeDefined());
});
