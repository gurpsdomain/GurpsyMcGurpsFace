/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OpenSheetDialogComponent} from './open-sheet-dialog.component';
import {ModelReadService} from '../../../services/model-read-service/model-read.service';
import {JsonService} from '../../../services/json-service/json.service';

describe('OpenSheetDialogComponent', () => {
  let component: OpenSheetDialogComponent;
  let fixture: ComponentFixture<OpenSheetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OpenSheetDialogComponent
      ],
      providers: [
        ModelReadService,
        JsonService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSheetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});