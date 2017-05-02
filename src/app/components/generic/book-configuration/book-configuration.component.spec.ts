import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookConfigurationComponent} from './book-configuration.component';
import {TranslateModule} from 'ng2-translate';
import {MaterialModule} from '@angular/material';
import {FileInputComponent} from '../file-input/file-input.component';

describe('BookConfigurationComponent', () => {
  let component: BookConfigurationComponent;
  let fixture: ComponentFixture<BookConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookConfigurationComponent,
        FileInputComponent
      ],
      imports: [
        MaterialModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create a reusable generic Book Configuration Component', () => {
  //   expect(component).toBeTruthy();
  // });
});
