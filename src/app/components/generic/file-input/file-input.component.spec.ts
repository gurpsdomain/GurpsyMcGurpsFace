import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FileInputComponent} from './file-input.component';
import {GurpsyMaterialModule} from '../../../gurpsy-material.module';

describe('FileInputComponent', () => {
  let component: FileInputComponent;
  let fixture: ComponentFixture<FileInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileInputComponent
      ],
      imports: [
        GurpsyMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a reusable generic File Input Component', () => {
    expect(component).toBeTruthy();
  });
});
