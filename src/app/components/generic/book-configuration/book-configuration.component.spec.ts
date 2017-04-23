import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookConfigurationComponent} from './book-configuration.component';
import {TranslateModule} from 'ng2-translate';
import {MaterialModule} from '@angular/material';

describe('BookConfigurationComponent', () => {
  let component: BookConfigurationComponent;
  let fixture: ComponentFixture<BookConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookConfigurationComponent
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
