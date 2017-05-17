/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EquipmentComponent} from './equipment.component';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/model-service/model.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {PageReferenceComponent} from '../../../generic/page-reference/page-reference.component';
import {Http, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {ConfigService} from '../../../../services/config-service/config.service';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EquipmentComponent,
        PageReferenceComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        ConfigService,
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
    fixture = TestBed.createComponent(EquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a reusable Equipment Component', () => {
    expect(component).toBeTruthy();
  });
});
