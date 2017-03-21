/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {DeleteSettingsDialogComponent} from './delete-settings-dialog.component';

describe('DeleteSettingsDialogComponent', () => {
  let component: DeleteSettingsDialogComponent;
  let fixture: ComponentFixture<DeleteSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSettingsDialogComponent],
      imports: [
        MaterialModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
