import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookViewerComponent} from './book-viewer.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../../modules/material.module';
import {PageReferenceService} from '../../../services/page-reference/page-reference.service';

describe('BookViewerComponent', () => {
  let component: BookViewerComponent;
  let fixture: ComponentFixture<BookViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookViewerComponent],
      imports: [
        GurpsyMaterialModule,
        PdfViewerModule,
        TranslateModule.forRoot()
      ],
      providers: [
        PageReferenceService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
