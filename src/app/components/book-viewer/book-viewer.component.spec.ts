import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookViewerComponent} from './book-viewer.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {PageReferenceService} from '../../services/front-end/page-reference/page-reference.service';
import {SettingsService} from '../../services/front-end/settings/settings.service';
import {StorageService} from '../../services/back-end/storage/storage.service';
import {TemplateStorageDelegate} from '../../services/back-end/storage/delegates/template-storage-delegate/template-storage-delegate';
import {SettingsStorageDelegate} from '../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
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
        SettingsStorageDelegate,
        TemplateStorageDelegate,
        StorageService
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
