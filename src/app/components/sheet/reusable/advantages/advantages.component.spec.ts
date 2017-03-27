/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdvantagesComponent} from './advantages.component';
import {TranslateModule} from 'ng2-translate';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';

describe('AdvantagesComponent', () => {
  let component: AdvantagesComponent;
  let fixture: ComponentFixture<AdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelReadService,
        JsonService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an Reusable Advantages Component', () => {
    expect(component).toBeTruthy();
  });
});
