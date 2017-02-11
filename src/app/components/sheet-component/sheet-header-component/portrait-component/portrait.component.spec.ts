/* tslint:disable:no-unused-variable */
import {PortraitComponent} from './portrait.component';
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
describe('PortraitComponent', function () {
  let de: DebugElement;
  let comp: PortraitComponent;
  let fixture: ComponentFixture<PortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PortraitComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelReadService,
        JsonService,
        StorageService,
        ThemeStorageDelegate,
        SheetStorageDelegate,
        LanguageStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create Portrait component', () => expect(comp).toBeDefined());
});
