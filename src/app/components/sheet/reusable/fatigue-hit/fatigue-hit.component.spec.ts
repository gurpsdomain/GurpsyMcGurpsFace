import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FatigueHitComponent} from './fatigue-hit.component';
import {JsonService} from '../../../../services/json-service/json.service';
import {ModelService} from '../../../../services/model-service/model.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {TranslateModule} from '@ngx-translate/core';

describe('FatigueHitComponent', () => {
  let component: FatigueHitComponent;
  let fixture: ComponentFixture<FatigueHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FatigueHitComponent],
      providers: [
        ModelService,
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
    fixture = TestBed.createComponent(FatigueHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create  a reusable Fatigue/Hit Component', () => {
    expect(component).toBeTruthy();
  });
});
