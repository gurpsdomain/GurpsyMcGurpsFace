import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LibraryComponent} from './library.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibraryComponent,
        PdfViewerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
