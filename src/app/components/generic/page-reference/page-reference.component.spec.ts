import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PageReferenceComponent} from './page-reference.component';
import {LibraryService} from '../../../services/front-end/library/library.service';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {StorageService} from '../../../services/back-end/storage/storage.service';
import {SheetStorageDelegate} from '../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SettingsStorageDelegate} from '../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {JsonService} from '../../../services/back-end/json/json.service';

describe('PageReferenceComponent', () => {
  let component: PageReferenceComponent;
  let fixture: ComponentFixture<PageReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageReferenceComponent
      ],
      providers: [
        JsonService,
        LibraryService,
        SettingsService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a reusable generic Page Reference Component', () => {
    expect(component).toBeTruthy();
  });
});
