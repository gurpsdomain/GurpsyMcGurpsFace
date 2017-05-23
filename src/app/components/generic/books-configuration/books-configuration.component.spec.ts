import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BooksConfigurationComponent} from './books-configuration.component';

describe('BooksConfigurationComponent', () => {
  let component: BooksConfigurationComponent;
  let fixture: ComponentFixture<BooksConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BooksConfigurationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create a reusable generic Books Configuration Component', () => {
  //   expect(component).toBeTruthy();
  // });
});