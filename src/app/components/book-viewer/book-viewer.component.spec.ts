import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookViewerComponent} from './book-viewer.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {PageReferenceService} from '../../services/front-end/page-reference/page-reference.service';
import {SettingsService} from '../../services/front-end/settings/settings.service';
import {TemplateStorageService} from '../../services/back-end/template-storage/template-storage.service';
import {SettingsStorageService} from '../../services/back-end/settings-storage/settings-storage.service';
import {LoggingService} from '../../services/back-end/logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('BookViewerComponent', () => {
  let component: BookViewerComponent;
  let fixture: ComponentFixture<BookViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookViewerComponent,
        PdfViewerComponent],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        PageReferenceService,
        SettingsService,
        SettingsStorageService,
        TemplateStorageService
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
