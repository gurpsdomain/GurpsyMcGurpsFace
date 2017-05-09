import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FatigueHitComponent} from './fatigue-hit.component';
import {JsonService} from '../../../../services/json-service/json.service';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {TranslateModule} from 'ng2-translate';

describe('FatigueHitComponent', () => {
  let component: FatigueHitComponent;
  let fixture: ComponentFixture<FatigueHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FatigueHitComponent],
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
    fixture = TestBed.createComponent(FatigueHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create  a reusable Fatigue/Hit Component', () => {
    expect(component).toBeTruthy();
  });
});
