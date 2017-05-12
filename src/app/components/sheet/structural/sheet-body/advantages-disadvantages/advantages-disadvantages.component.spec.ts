/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdvantagesDisadvantagesComponent} from './advantages-disadvantages.component';
import {TranslateModule} from '@ngx-translate/core';
import {AdvantagesComponent} from '../../../reusable/advantages/advantages.component';
import {DisadvantagesComponent} from '../../../reusable/disadvantages/disadvantages.component';
import {ModelService} from '../../../../../services/model-service/model.service';
import {JsonService} from '../../../../../services/json-service/json.service';
import {StorageService} from '../../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {PageReferenceComponent} from '../../../../generic/page-reference/page-reference.component';

describe('AdvantagesComponent', () => {
  let component: AdvantagesDisadvantagesComponent;
  let fixture: ComponentFixture<AdvantagesDisadvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesDisadvantagesComponent,
        AdvantagesComponent,
        DisadvantagesComponent,
        PageReferenceComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelService,
        JsonService,
        StorageService,
        ConfigStorageDelegate,
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

  it('should create a structural Advantages/Disadvantages Component', () => {
    expect(component).toBeTruthy();
  });
});
