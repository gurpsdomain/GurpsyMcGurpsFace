import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LibraryComponent} from './library.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {MaterialModule} from '@angular/material';
import {GurpsyMaterialModule} from '../../gurpsy-material.module';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibraryComponent,
        PdfViewerComponent],
      imports: [
        GurpsyMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an Reusable Library Component', () => {
    expect(component).toBeTruthy();
  });
});
