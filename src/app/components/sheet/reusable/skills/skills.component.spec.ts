/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SkillsComponent} from './skills.component';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/model-service/model.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {PageReferenceComponent} from '../../../generic/page-reference/page-reference.component';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {ConfigService} from '../../../../services/config-service/config.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageReferenceComponent,
        SkillsComponent
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
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a reusable Skills Component', () => {
    expect(component).toBeTruthy();
  });
});
