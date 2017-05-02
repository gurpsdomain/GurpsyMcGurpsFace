import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FileInputComponent} from './file-input.component';
import {MaterialModule} from '@angular/material';

describe('FileInputComponent', () => {
  let component: FileInputComponent;
  let fixture: ComponentFixture<FileInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileInputComponent
      ],
      imports: [
        MaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
