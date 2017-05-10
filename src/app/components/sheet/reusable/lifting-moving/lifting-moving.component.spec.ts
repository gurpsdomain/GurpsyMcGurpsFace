import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LiftingMovingComponent} from './lifting-moving.component';
import {TranslateModule} from '@ngx-translate/core';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';
import {JsonService} from '../../../../services/json-service/json.service';
import {StorageService} from '../../../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';

describe('LiftingMovingComponent', () => {
  let component: LiftingMovingComponent;
  let fixture: ComponentFixture<LiftingMovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiftingMovingComponent],
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
    fixture = TestBed.createComponent(LiftingMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an Reusable Lifting/Moving Component', () => {
    expect(component).toBeTruthy();
  });
})
;
