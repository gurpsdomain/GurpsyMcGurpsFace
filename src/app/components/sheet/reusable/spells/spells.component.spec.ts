/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SpellsComponent} from './spells.component';
import {TranslateModule} from '@ngx-translate/core';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {PageReferenceComponent} from '../../../generic/page-reference/page-reference.component';

describe('SpellsComponent', () => {
  let component: SpellsComponent;
  let fixture: ComponentFixture<SpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageReferenceComponent,
        SpellsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        OutputModelService,
        JsonService,
        StorageService,
        ConfigStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a reusabale Spells Component', () => {
    expect(component).toBeTruthy();
  });
});
