/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OpenSheetDialogComponent} from './open-sheet-dialog.component';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {FileInputComponent} from '../../../generic/file-input/file-input.component';

describe('OpenSheetDialogComponent', () => {
  let component: OpenSheetDialogComponent;
  let fixture: ComponentFixture<OpenSheetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OpenSheetDialogComponent,
        FileInputComponent
      ],
      providers: [
        ModelService
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