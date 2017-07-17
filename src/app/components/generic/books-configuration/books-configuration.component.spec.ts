import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BooksConfigurationComponent} from './books-configuration.component';
import {PageReferenceService} from '../../../services/front-end/page-reference/page-reference.service';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {SettingsStorageDelegate} from '../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {StorageService} from '../../../services/back-end/storage/storage.service';
import {LoggingService} from '../../../services/back-end/logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('BooksConfigurationComponent', () => {
  let component: BooksConfigurationComponent;
  let fixture: ComponentFixture<BooksConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BooksConfigurationComponent],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        PageReferenceService,
        SettingsService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
