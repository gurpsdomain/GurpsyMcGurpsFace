import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LibraryComponent} from './library.component';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import {MaterialModule} from '@angular/material';
import {GurpsyMaterialModule} from '../../modules/material.module';
import {PageReferenceService} from '../../services/front-end/page-reference/page-reference.service';
import {SettingsService} from '../../services/front-end/settings/settings.service';
import {StorageService} from '../../services/back-end/storage/storage.service';
import {SheetStorageDelegate} from '../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SettingsStorageDelegate} from '../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {JsonService} from '../../services/back-end/json/json.service';

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
      ],
      providers: [
        JsonService,
        PageReferenceService,
        SettingsService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService,
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
