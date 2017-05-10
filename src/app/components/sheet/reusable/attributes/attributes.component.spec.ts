/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AttributesComponent} from './attributes.component';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {JsonService} from '../../../../services/json-service/json.service';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';
import {TranslateModule} from '@ngx-translate/core';

describe('AttributesComponent', () => {
  let component: AttributesComponent;
  let fixture: ComponentFixture<AttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttributesComponent],
      providers: [
        OutputModelService,
        JsonService,
        ConfigStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a reusable Attributes Component', () => {
    expect(component).toBeTruthy();
  });
});
