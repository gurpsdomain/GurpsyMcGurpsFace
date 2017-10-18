import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {FileFormComponent} from './file.form.component';

describe('FileInputComponent', () => {
  let component: FileFormComponent;
  let fixture: ComponentFixture<FileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileFormComponent
      ],
      imports: [
        GurpsyMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
