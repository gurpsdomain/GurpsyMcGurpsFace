/* tslint:disable:no-unused-variable */
import {PlayerInformationComponent} from './player-information.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from 'ng2-translate';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';

////////  SPECS  /////////////
describe('PlayerInformationComponent', function () {
  let de: DebugElement;
  let comp: PlayerInformationComponent;
  let fixture: ComponentFixture<PlayerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerInformationComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        OutputModelService,
        JsonService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInformationComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create a reusable Player Information Component', () => expect(comp).toBeDefined());
});
